import LoginForm from "../components/loginForm/LoginForm";

const page = () => {
  return (
    <div className="flex justify-center items-center h-dvh px-4">
      <div className="w-4/5 md:w-3/4 xl:w-1/2 h-3/5 flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
