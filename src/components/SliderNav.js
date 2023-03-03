import '../css/slidernav.css';

function SliderNav({titleSliderNav}) {
  return (
    <div className='sliderNav top'>
        <div className='sliderNav_container'>
            <div className='sliderNav_text'>
                <h2>{titleSliderNav}</h2>
            </div>
        </div>
    </div>
  );
}

export default SliderNav;