// import { useRouter } from 'next/router';
import LoginBtn from '@/components/LoginBtn';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Login Page" description="Login pages" />}>
      <div className="grid gap-[20px]">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <LoginBtn>깃허브 로그인</LoginBtn>
        <LoginBtn>카카오 로그인</LoginBtn>
        <LoginBtn>네이버 로그인</LoginBtn>
        <LoginBtn>애플 로그인</LoginBtn>
        <LoginBtn>구글 로그인</LoginBtn>
      </div>
    </Main>
  );
};

export default Index;
