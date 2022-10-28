import React from "react";
import jsPDF from "jspdf";
import logo from '../../asset/logo.png';
import './Pdf.css';
import { FaDownload, FaFilePdf } from "react-icons/fa";

const Pdf = () => {
    

  const handlePdf = () => {
      var doc = new jsPDF('landscape', 'px', 'a4', 'false');
      doc.addImage(logo, 'PNG', 65, 20, 500, 350);
      doc.addPage()
      doc.text("1. Complete English Course: Master Native English for Beginners", 20, 30);
      doc.text("2. What you'll learn", 20, 50);
      doc.text("3. Business English", 20, 70);
      doc.text("4. How to make appointments and plans", 20, 90);
      doc.text("5. Conversational English to sound like a native", 30, 110);
      doc.text("6. How to talk to friends", 20, 130);
      doc.text("7. Describing your favorite books and films", 20, 150);

      doc.text("Description", 20, 170);
      doc.text("After you’ve learned the basics of English, it’s important to learn the art of conversation so you can make friends,", 20, 190);

      doc.text("conduct business, take classes, or watch your favorite English films and not only understand what people say, ", 20, 210);

      doc.text("but to also be able to reply with your own thoughts and feelings. If you have ever dreamed of traveling to an", 20, 230);

      doc.text(" English-speaking country for work, school, or pleasure, or even just want an English friend,", 20, 250);

      doc.text("then you need this course so you can learn how to communicate like a native with an enriched vocabulary so ", 20, 270);

      doc.text("you can explain even your most complicated thoughts! And the skills you learn in this course can take you even ", 20, 290);

      doc.text("far beyond the English-speaking world. As the world’s common language, most people now have some level of ", 20, 310);

      doc.text("English, so knowing this language can help you function in just about every country to some degree.", 20, 330);

      doc.text("We know it can be difficult to learn how to speak naturally in a new language and that’s why we created this ", 20, 350);

      doc.text("course, to help you learn how to use English for everyday situations in a way that feels comfortable and normal.", 20, 370);

      doc.text("After you have completed this course you will be able to travel all over the world for anything and be able to use ", 20, 390);

      doc.text("English to help you find your way around, connect with locals and other travelers, do business, and so much more!", 20, 410);

    doc.save("a.pdf");
  };

    return (
        <div>
            <div className="style">
                <FaFilePdf></FaFilePdf> Couse Details PDF File Download
                <span className="link-primary custom-design" onClick={handlePdf}> <FaDownload></FaDownload></span>
            </div>
        </div>
    );
};

export default Pdf;
