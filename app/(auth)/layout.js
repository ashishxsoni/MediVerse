
/* this authlayout will apply to both signup and sigin pages */
const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayout;
