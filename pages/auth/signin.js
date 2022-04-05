import { getProviders, signIn as SignIntoProvider  } from "next-auth/react";
import  Header  from "../../components/Header";
import banner from "../../public/PicShare.png";

//Browser...
function signIn({ providers }) {
    return (
        <>
        <Header />

        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center">
            <p className="font-xs font-s italic">
                Please Sign In With Google To Continue!
            </p>
            <div className="mt-40">
            {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
                </button>
            </div>
            ))}
        </div>

        </div>
        
        
      </>
    );
}

//Server...
export async function getServerSideProps() {
    const providers = await getProviders();
    
    return {
        props: {
            providers
        }
    }
}

export default signIn;