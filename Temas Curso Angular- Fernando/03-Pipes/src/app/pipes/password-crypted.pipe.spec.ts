import { PasswordCryptedPipe } from './password-crypted.pipe';

describe('PasswordCryptedPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordCryptedPipe();
    expect(pipe).toBeTruthy();
  });
});
