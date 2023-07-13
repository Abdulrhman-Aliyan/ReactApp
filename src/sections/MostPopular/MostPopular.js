import './MostPopular.css';

import {Card, SectionHeader, SectionWrapper} from '../../components/index'
import {default as MostPopularItemsData} from '../../Data/MostPopulerItemsData'

const MostPopular = () => {

  const cards = MostPopularItemsData.map(card => {
    return <Card key={card.id} title={card.title} category={card.category} rating={card.rating} download={card.download} image={card.image}/>
  });

  return (
    <>
        <SectionWrapper>
            <SectionHeader> Most Popular </SectionHeader>
            <div className='most-popular-items'>
                {cards}
            </div>
        </SectionWrapper>
    </>
  )
}

export default MostPopular;