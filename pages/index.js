import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/dashboard");
  }, []);

  return null;
};

export async function getServerSideProps() {
  // This function is required for getServerSideProps, but we don't need to do anything here
  return {
    props: {},
  };
}

export default Home;
