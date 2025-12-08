import ServiceCard from './ServiceCard'

const DATA = [
  { title: 'iPhone', desc: 'Cracked screens, water damage, battery problems, and more.', img: 'iphone.svg' },
  { title: 'iPad', desc: 'Cracked screens, battery problems, and software issues.', img: 'ipad.svg' },
  { title: 'Android', desc: 'We can do complex repairs like motherboard replacements.', img: 'android.svg' },
  { title: 'Tablet', desc: 'Fast and cost-effective solutions for all kinds of tablets.', img: 'tablet.svg' },
]

export default function Services() {
  return (
    <>
      {DATA.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </>
  )
}
