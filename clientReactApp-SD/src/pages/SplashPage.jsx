
import { useLocation, Link } from 'react-router-dom'; // Import Link
import './pageStyles/splashPage.css';
import ScrumDumpsterIntro from '../components/ScrumDumpsterIntro';

export default function SplashPage(){
  return(
    <>
        <ScrumDumpsterIntro></ScrumDumpsterIntro>
    </>
  );
}