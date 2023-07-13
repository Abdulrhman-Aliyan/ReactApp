import './GaminingLibrary.css'
import {GamingLibraryCard,SectionWrapper,SectionHeader} from '../../components/index'
import GaminingLibraryData from '../../Data/GaminingLibraryData'

const GaminingLibrary = (props) => {

    const cards = GaminingLibraryData.map( card => {
      return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.downlaod} />  
    });

  return (
    <SectionWrapper>
    <SectionHeader> GaminingLibrary </SectionHeader>
        <div className='most-popular-items'>
            {cards}
        </div>
    </SectionWrapper>
  )
}

export default GaminingLibrary