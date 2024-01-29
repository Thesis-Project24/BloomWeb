import BgVideo from "./BgVideo";

const Landing = () => {
  return (
    <div>
      <BgVideo />
      <div className="flex justify-evenly">
        <div className="relative top-[150px]">
          <h1 className="text-[50px] text-white font-serif pl-[60px] ">
            Welcome to Bloom
          </h1>
          <h1 className="text-[50px] text-white font-serif pl-[90px] ">
            Your Path to Mental Well-Being
          </h1>
        </div>
        <img
          className="h-[450px] w-[850px]  mt-[0px]"
          src="https://cdn.discordapp.com/attachments/1173676553230635029/1199656642174799913/DALLE_2024-01-23_22.53.41_-_A_minimalistic_elegant_sketch_for_a_mental_health_care_app_landing_page._The_scene_features_a_therapist_sitting_on_a_chair_and_their_patient_lying_do-removebg-preview.png?ex=65c35650&is=65b0e150&hm=7f14a850f25d06af9111cf21383921c3c4c16a365039159944f94aabb9be39ba&"
          alt=""
        />
      </div>
      <div className="flex justify-evenly relative">
        <div className="relative">
          <img
            className="float-left"
            src="https://cdn.discordapp.com/attachments/1149048068742848594/1199687732197326899/image_2024-01-24_131009178-removebg-preview.png?ex=65c37344&is=65b0fe44&hm=34510459e3dc58aa03ce1aa5290fe47270175a5891014e6a192805c702692104&"
            alt=""
          />
          <div className="absolute top-[100px] left-[95px] p-4  bg-opacity-50">
            <p className="text-white  w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque officia quaerat itaque ea a cupiditate iusto delectus
              alias, eos ipsam dolorum veniam, sit nihil. Dicta necessitatibus
              quibusdam consequatur eaque laudantium?
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
