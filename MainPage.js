import React from "react";
import Card  from "./Card";

export default function MainPage() {
    return (
        <>
            <Card title="Wings of Fire" image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg"
                author="An Autobiography By Dr.APJ Abdul Kalam"
                text="Wings of Fire is an autobiography of APJ Abdul Kalam covering his early life 
                and his work in Indian space research and missile programs. 
                It is the story of a boy from a humble background who went on to become a key player 
                in Indian space research/Indian missile programs and later became the president of India.    
                In the book we learn how Kalam started his career in Aeronautical Development Establishment (ADE) and was involved in the design of a hovercraft. 
                Later he moved to Indian Space Research which was the brain child of Vikram Sarabhai. In 1963, Kalam went to NASA facility in Maryland(USA) as part 
                of a training program on sounding rocket launching techniques. ."
                id="book1"
                buylink="https://www.amazon.in/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461"
            />
            <Card title="What Can I Give?" image="https://images-na.ssl-images-amazon.com/images/I/712nrdXvnkS.jpg"
                author="By Srijan Pal Singh"
                text="What Can I Give, is an exceptional book written to immortalize a teachers love, 
                an inspiration for students to value their guru and a lesson for readers to live life with love and  
                give respect to both big and small. Such a feeling of inspiration 
                can only be felt for someone who knows the worth of teaching and who value the art of learning."
                id="book2" 
                buylink="https://www.amazon.in/What-Can-Give-lessons-P-J/dp/0143334263"
            />
            <Card title="Ignited Minds" image="https://images-na.ssl-images-amazon.com/images/I/81y66NkOkpL.jpg"
                author="By Dr.APJ Abdul Kalam" 
                text="In this book Dr. Kalam talks about his dream of developed India. The title of the book comes with a tag-line, “Unleashing the power within India”.

The strength of this book by Dr. Kalam is that it has been written in an easy to understand language, where he presents some of the most difficult issues our country is facing today in a very simple way. The book has been divided into nine short chapters, each one of them dealing with various themes. Each chapter begins with a quote and ends with a summary giving the reader something to think about. Dr. Kalam in these chapters talks about his experiences and interactions with people from different spheres of the society, 
including school and college students, eminent scientists and visionaries, saints and industrialists."
                id="book3"
                buylink="https://www.amazon.in/Ignited-Minds-Unleashing-power-within/dp/0143424122"
            />

            <Card title="The Magic of Thinking Big"
                image="https://images-na.ssl-images-amazon.com/images/I/71ZC-ROah6L.jpg"
                author="By David Schwartz"
                text=" The way we think has the most significant impact on our chances of being successful. If we think big, we will start attracting luck and fantastic ideas. If we continue to think small, we are increasing our chances of failure. Thinking big means training yourself to see not just what is, but what can be. Visualization can further improve your chances of success.

Thinking big will leave no limit on your self-improvement. To improve your growth efficiency you must start asking yourself “how” you can do better. This simple question will encourage your mind to identify creative answers that can help you grow."
                id="book4"
                buylink="https://www.amazon.com/Magic-Thinking-Big-David-Schwartz/dp/0671646788"
            />


        </>
    );
}