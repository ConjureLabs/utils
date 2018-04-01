const { test } = require('ava')

const signedEncryption = require('../../crypto/signed-encryption')

test('should encrypt and decrypt a string', t => {
  const encryptor = signedEncryption('aes256', 'cosmo').withHmac('sha512', 'gretchen')
  const encrypted = encryptor.encrypt('dickens')
  t.not(encrypted, 'dickens')
  const decrypted = encryptor.decrypt(encrypted)
  t.is(decrypted, 'dickens')
})

test('should throw given a bogus input to decrypt', t => {
  const encryptor = signedEncryption('aes256', 'cosmo').withHmac('sha512', 'gretchen')

  t.throws(() => {
    encryptor.decrypt()
  })
  t.throws(() => {
    encryptor.decrypt('bogus')
  })
  t.throws(() => {
    encryptor.decrypt('super-duper>><<bogussssss')
  })

  // testing a false signature
  const encrypted = encryptor.encrypt('dickens')
  const tokens = encrypted.split('>><<')
  const fakeEncrypted = `${tokens[0]}>><<${tokens[1].split('').reverse().join('')}`
  t.throws(() => {
    encryptor.decrypt(fakeEncrypted)
  })
})
