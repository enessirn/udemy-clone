import React from 'react'

function LessonTabs() {
  return (
    <div className='container-fluid p-0 '>
      <ul className='tab-list'>
        <a href="#link" className='tab-active'><li>Veri Bilimi</li></a>
        <a href="#link"><li>Liderlik</li></a>
        <a href="#link"><li>İletişim</li></a>
        <a href="#link"><li>İş Analitiği ve Zekası</li></a>
      </ul>
    </div>
  )
}

export default LessonTabs
