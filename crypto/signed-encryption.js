const crypto = require('crypto')

const badDataErrorMessage = 'Unable to verify data'

const getCipher = Symbol('get cipher')
const getDecipher = Symbol('get decipher')
const getHmac = Symbol('get hmac')
const getSignature = Symbol('get signature of string')

class SignedEncryption {
  constructor(cipherArgs, hmacArgs) {
    this[getCipher] = () => crypto.createCipher(...cipherArgs)
    this[getDecipher] = () => crypto.createDecipher(...cipherArgs)
    this[getHmac] = () => crypto.createHmac(...hmacArgs)
    this.separator = '>><<'
  }

  [getSignature](data) {
    const hmac = this[getHmac]()
    hmac.update(data.toString())
    return hmac.digest('hex')
  }
  
  encrypt(data, ...updateArgs) {
    const cipher = this[getCipher]()
    let encrypted = cipher.update(data, ...updateArgs)
    encrypted += cipher.final('hex')

    const signature = this[getSignature](data)

    return `${encrypted}${this.separator}${signature}`
  }

  decrypt(hex, outputEncoding = 'utf8') {
    const tokens = hex.split(this.separator)

    if (tokens.length !== 2) {
      throw new Error(badDataErrorMessage)
    }

    const decipher = this[getDecipher]()
    let decrypted = decipher.update(tokens[0], 'hex', outputEncoding)
    decrypted += decipher.final(outputEncoding)

    const signature = this[getSignature](decrypted)

    if (signature !== tokens[1]) {
      throw new Error(badDataErrorMessage)
    }

    return decrypted
  }
}

module.exports = (...cipherArgs) => ({
  withHmac: (...hmacArgs) => {
    return new SignedEncryption([...cipherArgs], [...hmacArgs])
  }
})
