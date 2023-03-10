import Image from 'next/image' 
import classes from './Hero.module.css'


export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/my-avatar.jpeg' alt='Me' width={300} height={300} />
      </div>
      <h1>Hi im Liam</h1>
      <p>I blog about web development</p>
    </section>
  )
}