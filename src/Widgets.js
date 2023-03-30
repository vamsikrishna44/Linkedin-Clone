import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>Linkedin News</h2>
            <InfoIcon />

        </div>
        {newsArticle("This week's top newsletters","Top news - 1,001 Readers")}
        {newsArticle("Faster US visas for Indians","4d ago - 5,272 Readers")}
        {newsArticle("OTT gets creative with prices","3d ago - 1,001 Readers")}
        {newsArticle("Better banking for expats","3d ago - 1,001 Readers")}
        {newsArticle("Double-digit hikes on the cards","4d ago - 1,001 Readers")}
    </div>
  );
}

export default Widgets;