import { signIn } from 'next-auth/react';

type LoginBtnProps = {
  children: React.ReactNode;
};

type Provider =
  | '깃허브 로그인'
  | '네이버 로그인'
  | '카카오 로그인'
  | '구글 로그인'
  | '이메일 로그인';

const ProviderMap: Record<Provider, string> = {
  '깃허브 로그인': 'github',
  '네이버 로그인': 'naver',
  '카카오 로그인': 'kakao',
  '구글 로그인': 'google',
  '이메일 로그인': 'email',
};

export default function LoginBtn({ children }: LoginBtnProps) {
  const handleSSOLogin = () => {
    const providerKey = children as Provider;
    const provider = ProviderMap[providerKey];
    if (provider) {
      signIn(provider);
    }
  };

  return (
    <button type="button" onClick={handleSSOLogin}>
      {children}
    </button>
  );
}
