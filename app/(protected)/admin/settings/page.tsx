import { Metadata } from "next";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { redirect } from "next/navigation";
import UserEditForm from "@/components/UserEditForm";
import Image from "next/legacy/image";
import getCurrentUser from "@/actions/getCurrentUser";
export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <div className="mt-8 lg:max-w-fit md:max-w-fit sm:max-w-fit xs:max-w-fit w-full mx-auto md:rounded-2xl sm:rounded-2xl px-6 font-bold  py-4  text-center  border border-[#121212] bg-zinc-900 ">
     
      {currentUser?.name && (
        <div className=" justify-between  mx-auto">
           <h3 className=" text-[1.4rem] hover:text-cyan-800  m-2  ">
          {currentUser?.name}{" "}
          </h3>
          <Image
            src={currentUser?.image || avatarPlaceholder}
            alt={currentUser?.name}
            width={200}
            height={200}
            priority
            className="object-contain mx-auto mb-2 w-auto rounded-sm "
          />
          <div className="text-left">
            <h5>
              {" "}
              <span>Email:</span> {currentUser.email}
            </h5>
            <h5 className="my-2">
              <span className="mr-1 ">Desde:</span>
              {new Date(currentUser.createdAt).toLocaleDateString()}
            </h5>
            <h5>
              {" "}
              <span className="mr-1 ">Id:</span> {currentUser.id}
            </h5>

            {/* <SettingsPage currentUser={currentUser}/> */}
            <UserEditForm
              name={currentUser?.name}
              image={currentUser?.image as string}
              userId={currentUser?.id}
              email={currentUser?.email as string}
            />
          </div>
        </div>
      )}
    </div>
  );
}
