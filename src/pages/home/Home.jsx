import Image from 'next/image';
import { useRouter } from 'next/router'
import home from './home.module.css'

const Home = () => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/PrincipalPage/PrincipalPage');
  };
  return (
    <section className={home.ContainerHome}>
      <div className={home.ContainerHome__image}>
        <Image src="/images/amasaLogo.png" alt="" className={home["ContainerHome__image--img"]} width={500} height={500}/>
      </div>
      <div className={home.ContainerHome__text}>
        <p className={home.ContainerHome__text}>Milhojas armadas al instante</p>

      </div>
      <div className={home.ContainerHome__button}>
        <button type="submit" className={home["ContainerHome__button--btn"]} onClick={handleClick}>Ingresar</button>
      </div>

    </section>

  );
};
export default Home;
