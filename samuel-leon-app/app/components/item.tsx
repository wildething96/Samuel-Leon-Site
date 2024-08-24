import Image, { StaticImageData } from "next/image";
import "../globals.css";

const Item = ({ title, description, image }: Readonly<{ title: string, description: string, image: StaticImageData }>) => {
    return (
        <div 
            className="menu-items flex flex-col items-center justify-end bg-contain bg-no-repeat rounded-lg shadow-lg min-w-[18rem] max-w-[30rem] min-h-[26rem] max-h-[50em] cursor-pointer my-4" 
            style={{ 
                backgroundImage: `url(${image.src})`,
                backgroundSize: '100%', // Adjust this value to make the image bigger
                width: 'clamp(18rem, 90%, 30rem)',
                height: 'clamp(26rem, 20em, 50rem)',
            }}
        >
            <h3 className="menu-item text-5xl mb-5 font-semibold">{title}</h3>
            { description && <p className="text-gray-700 mb-4 bg-white bg-opacity-50 p-2 rounded">{description}</p>}
        </div>
    );
}

export default Item;











