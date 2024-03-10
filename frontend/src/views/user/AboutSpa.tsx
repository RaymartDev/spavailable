/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCameraSharp } from 'react-icons/io5';
import NavbarLogged from '../../components/Navbar/NavbarLogged';
import SpaDetails from '../../components/SpaDetails';
import ServiceSwiper from '../../components/ServiceSwiper';
import ProductSwiper from '../../components/ProductSwiper';
import GallerySwiper from '../../components/GallerySwiper';
import MapLocation from '../../components/MapLocation';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Image11 from '../../img/image11.png';
import Loader from '../../components/Loader Component/Loader';
import { useAppSelector } from '../../store/store';
import SpaState from '../../interface/SpaState';

function AboutSpa() {
  const [loading, setLoading] = useState<boolean>(false);
  const [coverPhoto, setCoverPhoto] = useState<string>('');
  const user = useAppSelector((state) => state.user);
  const spa = useAppSelector((state) => state.spa);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state || !location.state.item) {
      navigate('/user/dashboard');
    } else {
      setCoverPhoto(location.state.item.cover_photo || '');
    }
  }, [location.state]);

  if (loading) {
    return <Loader />;
  }
  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newCoverPhoto = URL.createObjectURL(file);
      setCoverPhoto(newCoverPhoto);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <NavbarLogged setLoading={setLoading} user={user} />
      <div className="flex h-[450px] md:h-[500px] z-10 relative">
        <img
          src={coverPhoto || location.state.item.cover_photo || Image11}
          className="object-cover h-full w-full"
          id="coverPhoto"
        />
        <label
          htmlFor="fileInput"
          className="absolute bottom-5 left-5 bg-[#41924B] text-white px-5 py-2 rounded-lg flex items-center gap-x-2 font-semibold cursor-pointer"
        >
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleCoverPhotoChange}
            className="hidden"
          />
          <IoCameraSharp size={20} />
          Edit Cover Photo
        </label>
      </div>
      <SpaDetails
        key={location.state?.item.id}
        setLoading={setLoading}
        item={
          spa.find((item) => item?.id === location.state.item?.id) as SpaState
        }
      />
      <ServiceSwiper />
      <ProductSwiper />
      <GallerySwiper />
      <MapLocation />
      <Menu />
      <Footer />
    </div>
  );
}

export default AboutSpa;
