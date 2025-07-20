interface ChartData {
  type: 'line' | 'multiBar' | 'pie' | 'table' | 'interactive' | 'draggableTable';
  data: any;
  title: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  labels?: string[];
  headers?: string[];
  showPercentages?: boolean;
  description?: string;
  maxValue?: number;
  instructions?: string;
  draggableItems?: Array<{ id: string; value: string }>;
}

interface Exercise {
  question?: string;
  answer?: string | string[];
  placeholder?: string | string[];
  multipleInputs?: boolean;
  chart?: ChartData;
  image?: string;
  isExplanation?: boolean;
  audio?: string; // Optional prop for audio explanation
  explanationTitle?: string;
  isChoice?: boolean;
  isChoiceImages?: boolean; // Optional prop for choice images
  choices?: string[];
  explanationContent?: string;
}

interface ExamData {
  title: string;
  timeLimit: string;
  exercises: Exercise[];
}



const examDataMap: Record<string, ExamData> = {
  "activity-1": {
    "title": "Line Graph Activity",
    "timeLimit": "45 minutes",
    "exercises": [
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: \nTo increase sharply\nTo increase dramatically\nTo increase considerably\nTo increase significantly\nTo increase steeply\nTo surge\nTo soar\nTo leap\nTo rocket. These terms help describe the data points in the graph.",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": true },
            { "label": "", "value": 300, "isBold": false },
            { "label": "2011", "value": 250, "isBold": false }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends:To remain stable/unchanged/constant",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 150, "isBold": true },
            { "label": "2011", "value": 150, "isBold": false },
            { "label": "2012", "value": 300, "isBold": false }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends:To level off/to stabilize",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": false },
            { "label": "2011", "value": 250, "isBold": false },
            { "label": "2012", "value": 250, "isBold": true }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends:To rise gradually/steadily ",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 200, "isBold": false },
            { "label": "2011", "value": 100, "isBold": false },
            { "label": "2012", "value": 150, "isBold": true }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends:To go up considerably/significantly ",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 150, "isBold": false },
            { "label": "2011", "value": 100, "isBold": false },
            { "label": "2012", "value": 400, "isBold": true }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends:To increase gradually and significantly ",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": false },
            { "label": "2011", "value": 150, "isBold": true },
            { "label": "2012", "value": 200, "isBold": true },
            { "label": "2013", "value": 250, "isBold": true }
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To peak at ….. in 2012",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 200, "isBold": false },
            { "label": "", "value": 100, "isBold": false },
            { "label": "2011", "value": 400, "isBold": true },
            { "label": "", "value": 100, "isBold": false },
            { "label": "2012", "value": 100, "isBold": false },
          
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To fluctuate around / between",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": false },
            { "label": "", "value": 180, "isBold": false },
            { "label": "", "value": 150, "isBold": false },
            { "label": "2011", "value": 100, "isBold": false },
            { "label": "", "value": 200, "isBold": false },
            { "label": "", "value": 150, "isBold": false },
            { "label": "2012", "value": 200, "isBold": false },
          
         
          ]
        }
      },
     
    
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To be erratic",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": false },
            { "label": "", "value": 400, "isBold": false },
            { "label": "2011", "value": 150, "isBold": false },
            { "label": "", "value": 400, "isBold": false },
            { "label": "2012", "value": 150, "isBold": false },
            { "label": "2013", "value": 350, "isBold": false },
            
          
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To bottom at",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 450, "isBold": false },
            { "label": "", "value": 100, "isBold": true },
            { "label": "2011", "value": 300, "isBold": false },
            { "label": "2012", "value": 300, "isBold": false },
           
            
          
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To fall sharply/dramatically/significantly to ,To plunge to, To plummet to",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 400, "isBold": false },
            { "label": "2011", "value": 400, "isBold": false },
            { "label": "2012", "value": 200, "isBold": false },
            { "label": "", "value": 100, "isBold": false },
          
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To decrease swiftly to",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 400, "isBold": false },
            { "label": "", "value": 400, "isBold": false },
            { "label": "2011", "value": 100, "isBold": false },
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To dip to",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 300, "isBold": false },
            { "label": "2011", "value": 300, "isBold": false },
            { "label": "", "value": 250, "isBold": false },
            { "label": "2012", "value": 300, "isBold": false },
            { "label": "", "value": 300, "isBold": false },
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To recover to,To improve",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 200, "isBold": false },
            { "label": "", "value": 300, "isBold": false },
            { "label": "2011", "value": 300, "isBold": false },
            { "label": "", "value": 100, "isBold": false },
            { "label": "2012", "value": 200, "isBold": true },
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To hit a/ the low of ,To reach a/the trough of",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 400, "isBold": false },
            { "label": "2011", "value": 350, "isBold": false },
            { "label": "", "value": 100, "isBold": true },
            { "label": "2012", "value": 200, "isBold": false },
            
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To remain static/stable/constant",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 200, "isBold": true },
            { "label": "2011", "value": 200, "isBold": false },
            
            { "label": "2012", "value": 350, "isBold": false },
            
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: Downturn",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 100, "isBold": false },
            { "label": "2011", "value": 250, "isBold": false },
            { "label": "", "value": 300, "isBold": false },
            { "label": "2012", "value": 200, "isBold": true },
            { "label": "2012", "value": 150, "isBold": false },
            
         
          ]
        }
      },
      {
        "isExplanation": true,
        "explanationTitle": "Understanding Line Graph Vocabulary",
        "explanationContent": "Line graphs show changes over time. Here are key vocabulary terms you'll need to describe trends: To drop slightly/marginally/negligibly to",
        "chart": {
          "type": "line",
          "title": "Sample Line Graph",
          "xAxisLabel": "",
          "yAxisLabel": "",
          "data": [
            { "label": "2010", "value": 200, "isBold": false },
            { "label": "2011", "value": 200, "isBold": false },
      
            { "label": "2012", "value": 175, "isBold": false },
            { "label": "2013", "value": 150, "isBold": false },
            
         
          ]
        }
      },
     
      {
        "chart": {
          "type": "draggableTable",
          "title": "Match Vocabulary Terms to Trend Descriptions",
          "instructions": "Drag and drop the verb and noun phrases from the table to the column that shows their meaning. More than one phrase can match to one column.",
          "data": [
            {
              "cells": [
                { "value": "Trend Description", "isDropZone": false },
                { "value": "Vocabulary Term", "isDropZone": false }
              ],
              "isHeader": true
            },
            {
              "cells": [
                { "value": "images/48.png", "isDropZone": false,isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "surge", "id": "cell-1" }
              ]
            },
            {
              "cells": [
                { "value": "images/49.png", "isDropZone": false,isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "plateau", "id": "cell-2" },
              ]
            },
            {
              "cells": [
                { "value": "images/50.png", "isDropZone": false, isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "plummet", "id": "cell-3" }
              ]
            },
            {
              "cells": [
                { "value": "images/51.png", "isDropZone": false , isImage: true},
                { "value": "", "isDropZone": true, "correctAnswer": "rebound", "id": "cell-4" }
              ]
            },
            {
              "cells": [
                { "value": "images/52.png", "isDropZone": false, isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "fluctuate", "id": "cell-5" }
              ]
            }
          ],
          "draggableItems": [
            
              { "id": "item-1", "value": "a slight drop" },
              { "id": "item-2", "value": "a significant increase" },
              { "id": "item-3", "value": "to plunge" },
              { "id": "item-4", "value": "a leap" },
              { "id": "item-5", "value": "erratic" },
              { "id": "item-6", "value": "a remarkable growth" },
              { "id": "item-7", "value": "to hit a low" },
              { "id": "item-8", "value": "static" },
              { "id": "item-9", "value": "to jump" },
              { "id": "item-10", "value": "fluctuation" },
              { "id": "item-11", "value": "to decrease marginally" },
              { "id": "item-12", "value": "to reach a trough" },
              { "id": "item-13", "value": "a peak point" },
              { "id": "item-14", "value": "to decrease drastically" },
              { "id": "item-15", "value": "to dip" },
              { "id": "item-16", "value": "to increase gradually" },
              { "id": "item-17", "value": "to reach a high" },
              { "id": "item-18", "value": "plateau" },
              { "id": "item-19", "value": "to rise steadily" }

          
          ]
        }
      },
      {
        "chart": {
          "type": "draggableTable",
          "title": "Match Vocabulary Terms to Trend Descriptions",
          "instructions": "Drag and drop the verb and noun phrases from the table to the column that shows their meaning. More than one phrase can match to one column.",
          "data": [
            {
              "cells": [
                { "value": "Trend Description", "isDropZone": false },
                { "value": "Vocabulary Term", "isDropZone": false }
              ],
              "isHeader": true
            },
            {
              "cells": [
                { "value": "images/48.png", "isDropZone": false,isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "surge", "id": "cell-1" }
              ]
            },
            {
              "cells": [
                { "value": "images/49.png", "isDropZone": false,isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "plateau", "id": "cell-2" },
              ]
            },
            {
              "cells": [
                { "value": "images/50.png", "isDropZone": false, isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "plummet", "id": "cell-3" }
              ]
            },
            {
              "cells": [
                { "value": "images/51.png", "isDropZone": false , isImage: true},
                { "value": "", "isDropZone": true, "correctAnswer": "rebound", "id": "cell-4" }
              ]
            },
            {
              "cells": [
                { "value": "images/52.png", "isDropZone": false, isImage: true },
                { "value": "", "isDropZone": true, "correctAnswer": "fluctuate", "id": "cell-5" }
              ]
            }
          ],
          "draggableItems": [
          
              { "id": "item-1", "value": "slightly" },
              { "id": "item-2", "value": "gradually" },
              { "id": "item-3", "value": "drastically" },
              { "id": "item-4", "value": "considerably" },
              { "id": "item-5", "value": "dramatically" },
              { "id": "item-6", "value": "negligibly" },
              { "id": "item-7", "value": "sharply" },
              { "id": "item-8", "value": "steadily" },
              { "id": "item-9", "value": "noticeably" },
              { "id": "item-10", "value": "steeply" }
          
          
          ]
        }
      },
      {
        isExplanation: true,
        explanationTitle: "Listening Exercise",
        audio: "audios/audio1.mp4",
      },
      {
        "question": "While listening to the audio, use your mouse to draw a graph that shows the increase and decrease of house sales. After completing your drawing, click the 'Submit' button to verify its accuracy.",
       
        "answer": "drawing",
        "chart": {
          "type": "interactive",
          "title": "Monthly Sales Pattern - Draw Your Line",
          "description":"While listening to the audio, use your mouse to draw a graph that shows the increase and decrease of house sales. After completing your drawing, click the 'Submit' button to verify its accuracy.",
          "xAxisLabel": "Months",
          "yAxisLabel": "House sales",
      
          "maxValue": 250,
          "data": [
            { "label": "2010", "value": 600000, "isBold": false },
           
          ]
        }
      },
      {
        "question": "Define whether it is a downward or upward trend in the following graph.",
        "answer": "downward",
        "image":"images/1.png",
        "placeholder": "e.g., downward, upward, stable...",
       
      },
      {
        "question": "Define whether it is a downward or upward trend in the following graph.",
        "answer": "upward",
        "image":"images/2.png",
        "placeholder": "e.g., downward, upward, stable...",
       
      },
      {
        "question": "Look at the following chart and fill in the gaps with the correct vocabulary. You should use no more than two words for each gap. There could be another option which is equivalent to the answers mentioned after being submitted. \n\n Regarding the number of zebras inhabiting in Africa in 1990,it …..  2 million, followed by …..  of 3 million in 1995 prior to …..  to approximately 500000 at the end of the period. Likewise, roughly 4 million of giraffes lived in Africa at the beginning after which the figure …..  and ….. of 200000 in 2015.",
        image: "images/66.png",
        "answer": ["stood at", "a peak", "decreasing dramatically","fluctuated slightly","hit a trough"],
        "placeholder": "Enter the verb...",
        multipleInputs: true,
      },
    
      {
        "question": "Look at the following line graph and fill in the gaps with the correct vocabulary. You should use no more than two words for each gap. Alternative answers that are equivalent in meaning may also be accepted upon submission. \n \n \n  At the beginning of the period, the majority of book sales were of detectives, at 25 % of all sales. Conversely, sci-fi was not popular as this genre of books had the lowest percentage at only 5%.Despite the fact that children’s books were also sold widely, they made up 15% of sales. As the sales of detective books began ….. , the percentage of sci-fi books started ….. in the first two years of the period, ..... the sales of detective books. At the same time, the figure for children’s books ….. to 30% till the end of the period. The year of 2013 saw a ….. in the proportion of sci-fi books.",
        "image": "images/3.png",
        "answer": ["decline","to increase","overtaking","rose","peak"],
        "placeholder": "Enter the verb...",
        multipleInputs: true,
      },
    
      {
        "question": "Look at the following line graph and then spot the mistakes, i.e. grammar, lexical, and data , in the part of the following sample. Then see the answer after submitting your version. \n \n \n \n There were always lower percentages of female members of parliament in Germany and Italy than those in the other countries. Germany and Italy experienced a different trend although Italy took the lead, making up nearly 40% at the end of the period. With regard  France, there was a stability to finish approximately 32% in 2012 after a slightly drop in 2004.In 2000, the lowest point was seen in the UK with roughly 3%.However, this figure fell substantial to 10% in 2004, followed by a continuous decline to hit its low 26% in 2013.",
        "image": "images/4.png",
        "answer": ["lower","different","to","stability","moderately","2004","fell substantial","decline","low","2013"],
        "placeholder": "Enter the verb...",
        multipleInputs: true,
      },
      {
        isExplanation: true,
        explanationTitle: "Look at the highlighted words and rewrite the sentences based on the following sample. Type your version in the box and then see the answer. If necessary, two sentences can be merged into one sentence. Alternative answers that are equivalent in meaning may also be accepted upon submission.",
        explanationContent:"Sample:The number of listeners to pop rock music increased steadily in 1990 in Italy. ( verb +adverb ) - The period of 1990 saw a steady increase in the number of listeners to rock music in Italy.           ( subject+ verb a + adjective +noun) There was a noticeable rise in the oil consumption from 1989 to 1995 in Sweden. ( there was a + adjective + noun) - Oil consumption in Sweden rose noticeably from 1989 to 1995. ( verb + noun)"
      },
      {
        question:"1.	The figure for margarine <b>peaked</b> at 120 grams in 1986.",
        answer: "There was a peak of 120 grams in the figure for margarine in 1986.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
      {
        question:"2.	The proportion of household <b>gradually decreased</b> and reached a low of 75 in 1975.",
        answer: "The proportion of household experienced a gradual decrease and reached a low of 75 in 1975.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
      {
        question:"3.	The number of complaints caused by traffic noise <b>doubled</b> in four years until it fluctuated mildly till 1998.",
        answer: "There was a doubling in the number of complaints caused by traffic noise over four years until it fluctuated mildly till 1998.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
      {
        question:"4.	<b>A fluctuation</b> was observed in the clothing export income after a 4-year period.",
        answer: "The clothing export income flactuated after a 4-year period.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
      {
        question:"5.	The Dutch saw <b>a plateau</b> in book sales throughout 5 years.",
        answer: "Book sales in the Netherlands plateaued for 5 years.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
      {
        question:"6.  The number of tablets sold in Prague <b>declined</b> to 500000 <b>remarkably</b> in 2015.Then it <b>remained unchanged</b> till 2018.",
        answer: "There was a remarkable decline in the number of tablets sold in Prague to 500000 in 2015. Followed by a period of stability until 2018.",
        placeholder: "Enter your answer here...",
        multipleInputs: false,
      },
    {
      isExplanation: true,
      explanationTitle: "Tasks",
      explanationContent: "Choose the best introductory sentence for a description of the following graph.",
    },
      {
        "question": "The line graph below describes monthly expenditures on household appliances in Norway between 1994 and 2004.",
        "answer": "The line graph provides information on the amount of money that Norwegians expended on domestic gadgets per month over the course of ten years from 1994 to 2004",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows yearly carbon dioxide emissions in Vietnam.",
        "answer": "The line graph delineates the annual output of carbon dioxide in an Asian country, Vietnam",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows daily temperature in Spain in June,1975.",
        "answer": "The line graph gives data on daily temperature variations in Spain throughout the month of June, 1975.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The chart below shows the average number of people in the UK who travelled each day by car, bus or train between 1970 and 2030.",
        "answer": "The line graph compares the average number of commuters traveling on a daily basis by three different modes of transport, namely car, bus and train within a 60-year time span , from 1970 to 2030.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The graph below shows the amount of waste which was produced by three companies from 1990 to 2005.",
        "answer": "The line graph illustrates three companies with regard to their waste output over a span of 15 years, from 1990 to 2005.",
        "placeholder": "",
        multipleInputs: false,
      },


{
        "question": "The line graph below shows the consumption of different kinds of meat in France between 1978 and 1998.",
        "answer": "The line graph provides information regarding the amount of various types of meat consumed in France over the span of two decades, from 1978 to 1998.",
        "placeholder": "",
        multipleInputs: false,
      },


{
        "question": "The line graph below describes expenditures on fast food in Denmark and France from 1980 to 1990.",
        "answer": "The line graph provides information on the amount of money that the Dutch and French expended on fast food over a span of one decade, from 1980 to 1990.",
        "placeholder": "",
        multipleInputs: false,
      },
{
        "question": "The line graph below shows yearly carbon dioxide emissions in Vietnam and Thailand.",
        "answer": "The line graph delineates the annual output of carbon dioxide in an Asian countries, Vietnam and Thailand.",
        "placeholder": "",
        multipleInputs: false,
      },
{
        "question": "The line graph below shows how old people in Italy spent their free time between 1990 and 2015.",
        "answer": ": The line graph gives data on the kind of activities being engaged by aged population of Italy in their spare time, covering a period from 1990 to 2015",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        isExplanation: true,
        explanationTitle: "Paraphrasing Rubrics",
        explanationContent: "Select one of the following rubrics and paraphrase it. Select answer in the box and compare it with the sample answer provided.",
      },
{
        "question": "The line graph below shows the number of Germans who read detective books in Germany from 1990 to 1998.",
        "isChoice":true,
        "choices": [
          "a)	The line graph describes how many people read detective books in Germany over the course of eight years, from 1990 to 1998.",
          "b)	The line graph shows the number of detective readers over the course of eight years, from 1990 to 1998."
        ],
        "answer": "a)	The line graph describes how many people read detective books in Germany over the course of eight years, from 1990 to 1998.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows the percentage of people who had solar panels between 1995 and 2005.",
        "isChoice":true,
        "choices": [
          "a)	The line graph describes the proportion of people owning solar panels within one decade from 1995 to 2005.",
          "b)	The line graph shows the amount of people who had solar panels between 1995 and 2005."
        ],
        "answer": "a)	The line graph describes the proportion of people owning solar panels within one decade from 1995 to 2005.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows average rainfall every month in London and Paris between January and December.",
        "isChoice":true,
        "choices": [
          "a)	The line graph provides information regarding the level of average rainfall on a monthly basis in two European cities, namely London and Paris, throughout 12 months.",
          "b)	The line graph describes average rainfall per month in particular cities of Europe over the whole year."
        ],
        "answer": "a)	The line graph provides information regarding the level of average rainfall on a monthly basis in two European cities, namely London and Paris, throughout 12 months.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows car production in three countries from January to December in 1990.",
        "isChoice":true,
        "choices": [
          "a)	The line graph shows data on the number of cars which were produced in three countries in 1990.",
          "b)	The line graph delineates monthly output of cars in three countries from January to December in 1990."
        ],
        "answer": "b)	The line graph delineates monthly output of cars in three countries from January to December in 1990.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "The line graph below shows the percentage of young people who participated in different outdoor sports in the UK between 1990 and 1998.",
        "isChoice":true,
        "choices": [
          "a)	The line graph details the percentage of the young taking part in various outdoor games in the UK.",
          "b)	The line graph illustrates the proportion of young people participating in various outdoor games in the UK within 8 years from 1990 to 1998."
        ],
        "answer": "b)	The line graph illustrates the proportion of young people participating in various outdoor games in the UK within 8 years from 1990 to 1998.",
        "placeholder": "",
        multipleInputs: false,
      },{
        "question": "The line graph shows the amount of money people in Paris spent on two different entertainment activities between 1975 and 1990.",
        "isChoice":true,
        "choices": [
          "a)	The line graph compares the amount of money expended on two different pastimes by Parisians throughout 15 years from 1975 to 1990.",
          "b)	The graph gives data on how much money people in Paris spent on two different entertainment activities from 1975 to 1990."
        ],
        "answer": "a)	The line graph compares the amount of money expended on two different pastimes by Parisians throughout 15 years from 1975 to 1990.",
        "placeholder": "",
        multipleInputs: false,
      },{
        "question": "The line graph shows the amount of three kinds of cheese which were eaten in Denmark last year.",
        "isChoice":true,
        "choices": [
          "a)	The line graph provides information on the amount of three kinds of cheese consumed in Denmark last year.",
          "b)	The line graph describes the consumption of three kinds of cheese in Denmark last year."
        ],
        "answer": "b)	The line graph describes the consumption of three kinds of cheese in Denmark last year.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Write an overview for the following chart in the box and then compare your answer with the sample answer provided. ",
        "image" : "images/5.png",
        "answer": "Overall, the largest number of commuters use London underground station at 8 am and 6 pm. Conversely, London underground station is less busier at 6am and 4pm, indicating that the lowest figures are recorded at the mentioned time.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Write an overview for the following chart in the box and then compare your answer with the sample answer provided. ",
        "image" : "images/6.png",
        "answer": "Overall, it is obvious that the price reached the highest point at the end of the time frame with some fluctuations throughout the given period.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Write an overview for the following chart in the box and then compare your answer with the sample answer provided. ",
        "image" : "images/7.png",
        "answer": "Overall, it is evident that the number of disease cases rose sharply till the mid of the seventies prior to being eradicated in Someland at the end of the period.",
        "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Which overview for the following graph is correct?",
        "image" : "images/8.png",
        isChoice: true,
        "choices": [
          "a)	Overall ,it can be seen that the level of poverty, the highest point of which was observed at the beginning of the period, decreased noticeably throughout the whole period.",
          "b)	Overall. the level of poverty decreased noticeably throughout the whole period.",
          "c)	Overall,it is clear that there was a decreasing trend in the level of poverty."
        ],
          "answer": "a)	Overall ,it can be seen that the level of poverty, the highest point of which was observed at the beginning of the period, decreased noticeably throughout the whole period.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Choose the best overview for a description of the following graph.",
        "image" : "images/9.png",
        isChoice: true,
        "choices": [
          "a)	Overall, the level of the average rainfall began to decrease from January to June when its lowest point was recorded and continued to increase to the point which was the same as it was at the beginning of the period in City 1, while City 2 experienced a downward trend.",
          "b)	Overall, it is obvious that the highest level of rainfall was in January and December in City 1, whereas there was a decrease in its amount in City 2.",
          "c)	Overall, it is clear that the highest point was in January and the lowest point was in July in both cities."
        ],
          "answer": "a)	Overall, the level of the average rainfall began to decrease from January to June when its lowest point was recorded and continued to increase to the point which was the same as it was at the beginning of the period in City 1, while City 2 experienced a downward trend.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "Choose the best full answer for a description of the following graph.",
        "image" : "images/10.png",
        isChoice: true,
        "choices": [
          "a)	The line graph gives data on the demand for three energy sources in Germany within three decades from 1960 to 1990. Overall, the demand for renewable energy and oil increased, whereas the units of gas decreased over the whole period. It should also be noted that oil became the predominant energy source by the end of the period although it was demanded least at the beginning. \n\n Looking at the details, renewable energy and gas had the largest share with approximately 100 units in 1960, following a reverse pattern in the next decades. By contrast, oil was the least preferred source, accounting for roughly 20 units less than the proportions of the aforementioned sources at the beginning. The need for renewable energy and oil began to increase gradually until 1975 when the quantity of oil overtook that of gas. From 1975 onward, the trends rose at a faster pace which means that a remarkable growth was noticed in the units of renewable energy and oil until the end of the period to finish at 250 and 260 units, respectively. In terms of gas, it had a large share in 1960 when it began to see a steady fall in 1975. From that time on, gas experienced a marked drop to 20 units in the third decade of the given period.",
          "b)	The line graph describes the units of demand for energy sources in Germany over the period from 1960 to 1990. Overall, it is noticeable that the demand for renewable energy and oil increased , while the units of gas decreased over a thirty-year period from 1960 to 1990. \n\n It is clear from the graph that renewable energy and gas had the biggest share with about 100 units in 1960.They followed a reverse pattern in the following years. Oil was the least demanded source which accounts for about 20 units. The demand for renewable energy and oil increased noticeably to 200 at the end of the period. \n\n Gas had a large share in 1960 when it began to see a steady fall till 1975. From that time on, gas experienced a marked drop to 20 units in the third decade of the given period.",
          "c)	The line graph describes the demand for energy sources in Germany within 30 years from 1960 to 1990. Overall, it is apparent that the demand for renewable energy and oil rose while the demand for gas decreased from 1960 to 1990. \n\n It is clear that renewable energy had the highest indicator, making up 120 units in 1960 whereas oil had the smallest share, at 30 units. Then the proportions of renewable energy and oil increased gradually to 140 and 80 units respectively in 1975.The proportions of renewable energy and oil continued to increase to 250 and 260 units in 1990. Gas had a higher demand at the beginning, at 90 units. It then decreased to 70 units in 1975. The proportion of gas continued to decrease to 20 units in 1990."
        ],
          "answer": "a)	The line graph gives data on the demand for three energy sources in Germany within three decades from 1960 to 1990. Overall, the demand for renewable energy and oil increased, whereas the units of gas decreased over the whole period. It should also be noted that oil became the predominant energy source by the end of the period although it was demanded least at the beginning. \n\n Looking at the details, renewable energy and gas had the largest share with approximately 100 units in 1960, following a reverse pattern in the next decades. By contrast, oil was the least preferred source, accounting for roughly 20 units less than the proportions of the aforementioned sources at the beginning. The need for renewable energy and oil began to increase gradually until 1975 when the quantity of oil overtook that of gas. From 1975 onward, the trends rose at a faster pace which means that a remarkable growth was noticed in the units of renewable energy and oil until the end of the period to finish at 250 and 260 units, respectively. In terms of gas, it had a large share in 1960 when it began to see a steady fall in 1975. From that time on, gas experienced a marked drop to 20 units in the third decade of the given period.",
         "placeholder": "",
        multipleInputs: false,
      },{
        isExplanation: true,
        explanationTitle: "Task",
        image:"images/67.png",
        explanationContent: "Read the following sample and then answer the questions given below. \n\n The line graph compares the number of Canadian women who married. 1992 also experienced females who married younger than any other year with peak marriage number in the 20 to 24 age group. In contrast, in 1972 and 2000 this peak happened later in the age bracket of 25-29.\nFor women aged 30-34, negligible differences were observed in the three years mentioned in spite of the figures for 1992 being marginally larger than in either 1972 or 2012.\nAs can be seen from the line graph, marriage numbers within every age group were greater in 1992 than in other years. It is particularly obvious in the age range of 20-24 where approximately 5000 women married in 1992.\nOverall, it is clear that women married more at every age group in 1992.",
      },
      {
        "question": "1.You can notice an evident problem without reading it.What is this problem?",
        
        isChoice: true,
        "choices": [
          "a)	There are many details.",
          "b)	It does not exceed the word limit.",
          "c)	It has many spelling mistakes."
        ],
          "answer": "b)	It does not exceed the word limit.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "2.Spot the mistake in the order of the paragraphs.",
        
        isChoice: true,
        "choices": [
          "a) An introductory sentence is mentioned in the first paragraph.",
          "b) The first paragraph of the main body describes the peak numbers in 1992.",
          "c) The first paragraph of the main body describes the happenings in 1992 using “also”,and an overview is described in the last paragraph."
        ],
          "answer": "c) The first paragraph of the main body describes the happenings in 1992 using “also”,and an overview is described in the last paragraph.",
         "placeholder": "",
        multipleInputs: false,
      },{
        "question": "3.There are some inaccuracies in the introductory sentence.What are they?",
        
        isChoice: true,
        "choices": [
          "a) “Compares” is not the correct word choice.",
          "b) It is not a line graph.",
          "c) The years and age groups are not mentioned in the introductory sentence."
        ],
          "answer": "c) The years and age groups are not mentioned in the introductory sentence.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "4.There is a figure which is mentioned inaccurately from the illustration.What is it?",
        
        isChoice: true,
        "choices": [
          "a) It is particularly obvious in the age range of 20-24 where approximately 5000 women married in 1992.",
          "b) It is clear that women married more at every age group in 1992."
        ],
          "answer": "b) It is clear that women married more at every age group in 1992.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "5.There is a problem which prevents a complete description. Type your response in the box and then see the answer.",
        
       
          "answer": "There is a problem with the order of the paragraphs and lack of important figures.",
         "placeholder": "",
        multipleInputs: false,
      },
      {
        "question": "6.There is a problem with an overview. Type your improved response in the box and then see your answer.",
        
       
          "answer": "Overall, women married more at every age group in 1992,except the age range of 25-29",
         "placeholder": "",
        multipleInputs: false,
      },
   
    
    ]
  },
  'activity-2': {
    title: 'Pie chart activity',
    timeLimit: '45 minutes',
    exercises: [
      {
        "isExplanation": true,
        "explanationTitle": "Pie chart Overview",
        "explanationContent": "Write an overview for the following chart in the box and then compare your answer with the sample answer provided. ."
      },
      {
        question: 'The pie chart below shows how much water was used for several reasons by Americans in February in 2012.',
        image: 'images/11.png',
        answer: 'Overall, water usage for toilet was the highest among all categories, while the least amount of water was consumed for other purposes',
        placeholder: '',
       
      },
      {
        question: 'The two pie charts below show the sources of income and the proportion of expenditure of these incomes in Lima in 2012.',
        image: 'images/12.png',
        answer: "Overall, the largest share of revenue came from individual income taxes, while the highest proportion of expenditure was allocated to the 'other' category.",
        placeholder: '',
       
      },
      {
        question: 'The pie charts below show the proportion of entertainment time spent in China in March of 2016 and 2018.',
        image: 'images/13.png',
        answer: "Overall, social networking accounted for the largest share among the activities over the two years, despite experiencing a decline in 2018. In contrast, reading and listening to audio had the lowest figures, remaining stable throughout the entire period.",
        placeholder: '',
       
      },
      {
        question: 'Look at the following pie charts and define the greatest changes.',

        image: 'images/13.png',
        answer: "Social networking,Video",
        placeholder: '',
       
      },
      {
        question: 'Look at the following pie charts and define the small changes.',

        image: 'images/13.png',
        answer: "audio,reading,news,game",
        placeholder: '',
       
      },
      
      {
        question: 'Look at the following charts and group the data given on the pie charts in the box.Then compare your answer with the sample answer provided.',

        image: 'images/13.png',
        answer: "news",
        placeholder: '',
       
      },
      {
        question:"Drag and drop the right fractions or expressions in the box to match to the right pictures.",
        chart: {
          type: 'draggableTable',
          title: 'Match Fractions to Pie Chart Slices',
          instructions: 'Drag and drop the right fractions or expressions in the box to match to the right pictures.',
          data: [
            {
              cells: [
                { value: 'Pie Chart Slice', isDropZone: false },
                { value: 'Fraction/Expression', isDropZone: false }
              ],
              isHeader: true
            },
            {
              cells: [
                { value: 'images/item-1.png', isDropZone: false, isImage:true },
                { value: '', isDropZone: true, correctAnswer: 'Three-quarters', id: 'cell-1' }
              ]
            },
            {
              cells: [
                { value: 'images/item-2.png', isDropZone: false,isImage:true },
                { value: '', isDropZone: true, correctAnswer: 'a half', id: 'cell-2' }
              ]
            },
            {
              cells: [
                { value: 'images/item-3.png', isDropZone: false,isImage:true },
                { value: '', isDropZone: true, correctAnswer: 'almost a third', id: 'cell-3' }
              ]
            },
            {
              cells: [
                { value: 'images/item-4.png', isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: '', id: 'cell-4' }
              ]
            },
            {
              cells: [
                { value: 'images/item-5.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: 'four-fifths', id: 'cell-5' }
              ]
            },
            {
              cells: [
                { value: 'images/item-6.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: 'nearly a half', id: 'cell-5' }
              ]
            },
            {
              cells: [
                { value: 'images/item-7.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: '1/12', id: 'cell-5' }
              ]
            },
            {
              cells: [
                { value: 'images/item-8.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: '1/12', id: 'cell-5' }
              ]
            },
            {
              cells: [
                { value: 'images/item-9.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: '1/12', id: 'cell-5' }
              ]
            },
            {
              cells: [
                { value: 'images/item-10.png' , isImage:true, isDropZone: false },
                { value: '', isDropZone: true, correctAnswer: '1/12', id: 'cell-5' }
              ]
            },
          
          ],
          draggableItems:[
            {id:'item-1',value:'Three-quarters'},
            {id:'item-2',value:'a half'},
            {id:'item-3',value:'three-fifths'},
            {id:'item-4',value:'four-fifths'},
            {id:'item-5',value:'almost a third'},
            {id:'item-6',value:'a quarter'},
            {id:'item-7',value:'seven in ten'},
            {id:'item-8',value:'a significant proportion'},
            {id:'item-9',value:'a minority'},
            {id:'item-10',value:'nearly a half'},
          ]
        }
      },
 
      
      {
        "question": "Read the following paragraphs and type the appropriate words and phrases above in the gap. There are extra words. \n \n \n \n Words : \n \n Decrease slightly, however, in contrast, the smallest, likewise, a half, slipped to, the most popular type, the second most popular, compared to, the second most common, most significant change, while, by comparison \n \n \n Of the six movie genres, thriller was ..... in both years, accounting for 28% in 1973, although its proportion ….. five years later. The …..  occurred in 1978, when action films surged to 24%, becoming ….. genre. Another genre, adventure, stood at 18%, …..  20% five years earlier. \n  …..  the other genres decreased in popularity. At the start of the period, western films were …..  type, attracting 22% of viewers; ….. , this figure slipped to 8% five years later, representing …..  share of the chart. ….. , crime films experienced a significant drop in ratings, with their audience shrinking to a negligible proportion— …..  than that of animation (12%), which emerged as a new genre in 1978.",
        "answer": ["the most popular type", "decreased slightly", "most significant change", "the second most popular", "compared to", "In contrast", "the second most common", "however", "the smallest", "Likewise", "slightly lower"],
        "placeholder": "Enter the word...",
        multipleInputs: true,
      },
      {
        question:"Spot the mistakes and correct them by using the words below.There are extra words. \n \n \n \n Words : \n In similar fashion, however, spend, while, but, difference, compared, on, to, is, spent \n\n\n\nOverall, the two pie charts show that smartphones and tablets are used for the same purposes but to very different extents.\nThe first pie chart shows how people spend their time on smartphones, while the second pie chart illustrates how time is spent on tablets. For both types of devices, the top use is for games, but the figures differ greatly. 57% of the time spent on a tablet is given to playing games, while only 35% of the time spent on a smartphone is used for this. In contrast, smartphone users spend 29% of their time accessing social networking sites compared with just 15% of tablet time spent on the same activity.\nThe third most popular use of the tablet is for consuming entertainment, with users spending 13% of their tablet time watching videos and listening to music. However, smartphone users dedicate only 8% of their smartphone time to such entertainment, preferring instead to spend 20% of their time on their phone accessing utilities. These can include maps, weather information, and calculators.\nThere is a clear difference in the way people are using their smartphones and tablets. In general, while tablets are being used more for gaming and other forms of entertainment, smartphones seem to be the preferred option for tasks as well as communication with the world."
,     answer: ["In similar fashion", "however", "spend", "while", "but", "difference", "compared", "on", "to", "is", "spent"],
        image:"images/14.png",
        placeholder: "Enter the word...",
        multipleInputs: true,},
      {
        isExplanation: true,
        explanationTitle: "Pie Chart Task",
        explanationContent:"The following task scores a low score. Improve it to get a higher score and then compare your version with the sample answer."
      },
      {
        "question":"The pie charts below show the percentage of people in three countries who drank three types of drinks.We can see from the charts that the percentages of people in Italy and Spain who drank cold drinks are 57 and 62.Cold drinks had the lowest percentage in Japan and it made up 19%.The figure for people drinking hot beverages was highest in Japan.It was 53%.On the other hand,the people’s figures for hot drinks in Italy and Spain were 8% and 12% respectively.Alcoholic drinks had middle positions in three countries.Overall,the main facts that stand out that Italy,Spain had the highest figures in the usage of cold drinks,but Japan had the lowest figure for cold drinks."
,      image: 'images/53.png',
  "answer":"The pie charts describe the proportion of Italians Spanish and Japanese drinking three types of beverages in 2012 overall cold beverages were drunk predominantly in Italy and Spain whereas the opposite was true for hot drinks it is worth noting that in Japan hot beverages had a larger share of drinkers in Italy and Spain the percentages of cold beverage drinkers accounted for 57 and 62 respectively by contrast approximately three times less than of those proportions was observed in Japan which showed the least popularity in Japan making up just under a fifth the opposite pattern was noticed in the share of hot beverage drinkers in Japan its dominance reached more than half of the Japanese whereas this type of drink did not have popularity in Italy and Spain representing a minority of the whole chart with regard to alcoholic beverages dramatic differences were not observed as the people in the above mentioned three countries maintained middle positions more than a quarter of the Spanish and Japanese consumed this type of drink while the figure for Italians was roughly 8 percent higher at 35 percent in terms of cold beverage consumption Spain had the highest proportion at 62 percent followed closely by Italy at 57 percent in contrast only 19 percent of Japanese respondents preferred cold drinks making it the least popular category in Japan conversely hot drinks were most consumed in Japan accounting for 53 percent of total drinkers while they made up a significantly smaller share in Italy and Spain at 17 percent and 11 percent respectively as for alcoholic beverages the differences among the countries were relatively minor around 27 percent of both Spanish and Japanese respondents consumed alcohol while Italy had a slightly higher proportion at 35 percent"
  ,      "placeholder": "",

      },
      {
        isExplanation: true,
        explanationTitle: "Audio",
        audio:"audios/audio2.mp3",
      },
      {
        question:"Listen to an assessor giving a student feedback on a practice IELTS Task 1 piece of writing.Identify and select the range (High Range,Mid-Range,Low Range) the feedback is related to for each criterion.",
        image: 'images/58.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "Mid-Range",
      },
      {
        isExplanation: true,
        explanationTitle: "Audio",
        audio:"audios/audio3.mp3",
      },
      {
        question:"Listen to an assessor giving a student feedback on a practice IELTS Task 1 piece of writing.Identify and select the range (High Range,Mid-Range,Low Range) the feedback is related to for each criterion.",
        image: 'images/59.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "High Range",
      },
      {
        isExplanation: true,
        explanationTitle: "Audio",
        audio:"audios/audio4.mp3",
      },
      {
        question:"Listen to an assessor giving a student feedback on a practice IELTS Task 1 piece of writing.Identify and select the range (High Range,Mid-Range,Low Range) the feedback is related to for each criterion.",
        image: 'images/60.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "Low Range",
      },
      {
        isExplanation: true,
        explanationTitle: "Audio",
        audio:"audios/audio5.mp3",
      },
      {
        question:"Listen to an assessor giving a student feedback on a practice IELTS Task 1 piece of writing.Identify and select the range (High Range,Mid-Range,Low Range) the feedback is related to for each criterion.",
        image: 'images/61.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "Mid-Range",
      }
    ]
  },
  'activity-3': {
    title: 'Table activity',
    timeLimit: '50 minutes',
    exercises: [
      {
        "isExplanation": true,
        "explanationTitle": "Table task",
        "explanationContent": "Write an overview for the following table in the box and then compare your answer with the sample answer provided. "
        },
      {
        question:'The table below shows the percentage of adult population who attended paid events in five countries in 2012.',
        image: 'images/15.png',
        answer:"Overall, cinema attracted the highest proportion of adults paying for admission across all the countries mentioned. In contrast, attendance at sports events was lower in the UK, France, and Germany compared to the USA and Canada, which showed the least interest in museums and galleries."
        ,placeholder: '',
      },
      {
        question:"The table below shows the production of fruit in six countries from 1992 to 2012.",
        image: 'images/16.png',
        answer:"Overall, fruit production increased in all the countries mentioned except Portugal throughout the given period. The most notable trend is that the USA produced by far the largest amount of fruit in three different years over the twenty-year span.",
        placeholder: '',
      },
      {
        question:"The table below shows the proportion of teenagers who played four different video games in Japan in 2005 and 2015,as well as a projection for 2030.",
        image: 'images/17.png',
        answer:": It is clear from the table that the percentage of adolescents playing adventure and simulation games has increased and is expected to continue rising,whereas the opposite is true for those gaming action and sports.",
        placeholder: '',
      },
      {
        question:"What similarities do you notice between six countries in the following table? \n The table below shows the production of fruit in 6 countries in 1992,2002 and 2012.",
        image: 'images/18.png',
        answer:"Poland,Portugal and the USA had higher figures.Besides,there was an upward trend in Japan,Poland,France,Italy,and the USA."
      },
      {
        question:"What differences do you notice between six countries in the following table? \n The table below shows the production of fruit in 6 countries in 1992,2002 and 2012.",
        image: 'images/18.png',
        answer:"Japan,France,and Italy had lower figures,whereas the rest countries had higher figures throughout the given timescale. Additionally, Portugal experienced a downward trend, in contrast to the generally upward trends observed in the remaining countries.."
      },
      {
        isExplanation: true,
        explanationTitle: "Table task",
        explanationContent: "Identify the mistakes and areas for improvement in the following sample based on the four IELTS Writing Task 1 assessment criteria. Then, assign an estimated band score.  After typing your version in the box,compare it with the provided answer.The provided answer may not contain all the mistakes or the parts needed to be developed.",
        image: 'images/19.png'
      },
      {
        
        question:"The table graph gives information about the films which were released in the UK and Republic of Ireland by genre.\nThe number of releases was the highest from drama and documentary films, accounting for 35, whereas the lowest figure for releases accounted for 1 from biopic. Total number of releases was 148, which was the highest indicator among all. Proportion of all releases from drama and documentary made up the highest score with 23.6% among other kinds. The lowest indicator for this type was biopic, constituting 7%.\nPeople preferred to buy comedy films. This proportion was just under a half. Individuals did not prefer to purchase romance films. Some people chose to go for horror, biopic, and drama considerably. The proportion of this was 20.2%, 9.1%, and 2.3% respectively. The remaining proportion of income was from crime, action and other — respectively 4.7%, 4.1%, and 3.2%.\nThe total indicator of income and all releases was equal, making up 100%.\nOverall, the highest indicator from releases was from drama and documentary films in both number and proportion, while the percentage of income from ticket sales in comedy was at the highest level.",
        answer:"Task Achievement:\n• The candidate does not give as clear a report of main trends as it should have. You can write: The highest total in the categories of the number and percentage of films released was noticed in documentaries and dramas. However, the percentage of revenue taken in from ticket sales does not compare to the highest numbers in the other two categories as documentaries and dramas earned very little and the majority of money was generated by comedies.\n• The whole task is not focused properly.\n• The year is not mentioned in the introductory sentence.\n• Lacks clear overview.\n• Does not compare or describe trends effectively.\nTA scores band 5.0\nCoherence and Cohesion:\n• There is a problem with the order of the paragraphs. An overview should either come after the introductory sentence or be written in a separate paragraph after the introduction.\n• There is a problem with the following sentence: Total number of releases was 148 which was the highest indicator between others. It is unnecessary to mention it as the candidate does not need to make a comparison here, and there is no linking word between this sentence and the sentence before and after this one.\n• Sentences are disconnected; poor use of linking devices.\n• There is no logical relationship between the following sentences: The lowest indicator for this type was biopic, constituting 7%. People preferred to buy comedy films.\n• There is no contrast cohesive device between the following sentences: Proportion of all releases from drama and documentary made up the highest score with 23.6% between other kinds. The lowest indicator for this type was biopic, constituting 7%.\n• It is unnecessary to mention the following sentence as we know that the total percentage equals to 100: The total indicator of income and all releases was equal, making up 100%.\n• Some errors in word choice cause coherence problems.\n• Transitions are weak or missing, making the text difficult to follow.\n• No clear grouping or logical organization of information.\nIt scores band 5.0\nLexical Resource:\n• A table and a graph are different things: The table graph gives information about the films which was released in the UK and Republic of Ireland.\n• The introductory sentence needs to be paraphrased as it is almost the same as it is in the rubric.\n• “Indicator” does not work in the following sentence. “Type/kind/genre” is better. “The percentage of income ….. was the highest level” sounds weird.\n• “Account for” is repeated in one sentence: The number of releases was the highest from drama and documentary films, accounting for 35, whereas the lowest figure for releases accounted for 1 from biopic.\n• “To go” should not be used in the sentence below. “Considerably” is irrelevant. Some people chose to go horror, biopic, drama considerably.\n• Some collocations are unnatural: “made up the highest score,” “choose to go horror.”\nIt scores band 5.0.\nGrammatical Range and Accuracy:\n• A lack of complex structures.\n• The candidate does not produce frequent error-free sentences.\n• Punctuation errors.\nIt scores band 5.0."
        ,placeholder: '',
      },
      {
        isExplanation: true,
        explanationTitle: "Table task",
        image:"images/68.png",
        explanationContent:"The following sample answer has got some typical mistakes which relate to the areas mentioned in the following statements: \n A. False factual information has been given. \n B. The rubric has been copied. \n  C. Personal opinions have been mentioned. \n D. Information has not been compared and contrasted instead the figures have been presented about one key area without comparing and contrasting it with another key area. \nE. There is no overall part instead a personal opinion is has been given as an overall part. \nF. Irrelevant and insignificant data has been presented. \n\n\n Sample answer : \n The table shows the percentage of teenagers who played action and adventure video games by gender in Britain from 1993 to 1995.\nThe reason why there are more males than females playing action is because they have more interest in action games. There are also more males than females playing adventure games as they are interested in adventure more.\nIn 1993, there was 90% of boys playing action and 10% playing adventure. In 1994, there was 80% of boys playing action and 15% playing adventure. In 1995, there was 85% of males who played action and 20% playing adventure.\nThe figures for the girls playing action initially rose slowly and then there was a noticeable rise. The figures for the girls playing adventure started low, then rose sharply, and then rose by just a small amount."
      },
   
      {
        question:"Choose the best full answer for a description of the following table. Then explain why the answer you choose is most appropriate.",
        isChoice: true,
        image: 'images/20.png',
        choices: [
          "a)The table describes the films which were made according to genre in the UK and the Republic of Ireland in 2021. Overall, it can be seen that dramas and documentaries had the highest figures in the category of number and percentage of films released whereas the largest share of income came from comedies, followed by horror films.\nLooking at the details, dramas and documentaries had the highest figures in the category of number and percentage of films produced in the UK. Both these genres had the same figures at 35. This was followed by comedy at 26. However, biopics had 1 release in 2012.\nRegarding the percentage of all releases, both dramas and documentaries had the highest proportions at 23.6%, which was followed by comedies at 17.6%. In contrast, the lowest percentage was seen in biopics at 0.7%.\nAccording to the amount of income, comedy produced the highest income levels at 45.4%. Horror also earned higher income at 20.2%. However, documentaries and dramas earned a little, making up 2.9% and 8.3% respectively. Thriller and romance produced the lowest income at 1.3% and 0.8% respectively.",
          "b)The table gives information about the films released in the UK and the Republic of Ireland in 2021. Overall, the highest number and percentage of releases were observed in documentary and drama whereas the lowest figures in the categories of number and percentage was in biopics.\n According to the number and percentage of all releases, documentary and drama had the highest figures. Their proportions was the same. 35 dramas and documentary released. Biopic had the lowest release at 1. The percentage of biopic releases was also very low with 0.8%. Drama and documentary had highest percentage. It was 23.6%. The proportion of comedy releases was also higher at 17.6%.\n Regarding to the percentage of income from ticket sales, we can see that comedy earned the most money. Its percentage was 45.4%. However, romance had the lowest income at 0.8%."
          ,"c)The table provides data on the number and percentage of films released by genre, as well as the proportion of revenue generated from ticket sales, in the UK and the Republic of Ireland in 2021.\n Overall, although documentaries and dramas accounted for the highest number and percentage of film releases, they contributed relatively little to total box office income. In contrast, comedy films generated the largest share of revenue, despite having fewer releases.\n A total of 148 films were released in 2021. Documentaries and dramas topped the list in terms of production, with 35 releases each, representing 23.6% of the total. Comedy followed with 26 films (17.6%), while biopics had the lowest output, with just a single release.\n In terms of income, comedy generated the highest revenue, accounting for 45.4% of total ticket sales. Horror also performed well, contributing 20.2% despite having fewer releases. By contrast, documentaries and dramas earned significantly less, making up just 2.9% and 8.3% respectively. Thriller and romance produced the lowest revenue figures, at 1.3% and 0.8% respectively."

        ],
        answer: "c)The table provides data on the number and percentage of films released by genre, as well as the proportion of revenue generated from ticket sales, in the UK and the Republic of Ireland in 2021.\n Overall, although documentaries and dramas accounted for the highest number and percentage of film releases, they contributed relatively little to total box office income. In contrast, comedy films generated the largest share of revenue, despite having fewer releases.\n A total of 148 films were released in 2021. Documentaries and dramas topped the list in terms of production, with 35 releases each, representing 23.6% of the total. Comedy followed with 26 films (17.6%), while biopics had the lowest output, with just a single release.\n In terms of income, comedy generated the highest revenue, accounting for 45.4% of total ticket sales. Horror also performed well, contributing 20.2% despite having fewer releases. By contrast, documentaries and dramas earned significantly less, making up just 2.9% and 8.3% respectively. Thriller and romance produced the lowest revenue figures, at 1.3% and 0.8% respectively.",
        placeholder: "Enter the letter of the correct answer...",
      },
      {
        question:"Examine the table below showing the percentage of adults who own tablets in five countries in 2015 and 2022. List the three most important features or trends you notice.",
        image: 'images/21.png',
        answer:"The USA had the highest ownership rates in both years, rising from 38% to 90%.Japan consistently showed the lowest ownership but still experienced significant growth, from 10% to 60%.all countries saw a substantial increase in tablet ownership within the decade."
      },
      {
        question:"Group by Percentage Change \n Task: For the table below showing population growth rates (%), group the countries by positive growth and negative growth, and write a paragraph describing these trends.",
        image: 'images/23.png',
        answer:"The population growth rates of the listed countries can be split into two groups: those with positive growth and those experiencing a decline. Brazil, India, and Nigeria all maintained positive but slightly reduced growth rates from 2015 to 2020. In contrast, Germany and Japan saw a decrease in population, with Germany’s growth falling just below zero and Japan’s decline accelerating."
      },
      {
        question:"Identify Logical Groups \n Task: Given the table below showing the number of tourists (in thousands) visiting six countries over three years, group the countries based on similar trends or figures, and write a sentence for each group.",
        image: 'images/22.png',
        answer:"The table reveals two clear groups of countries based on tourist numbers. France, Spain, and Italy consistently attracted the highest number of tourists, with figures close to or above 80,000 in 2018 and 2019, though these numbers dropped sharply in 2020. Conversely, the USA, Canada, and Australia saw lower but more stable tourist visits over the same period, with a smaller decline in 2020."

      },
      {
        isExplanation: true,
        explanationTitle:"Listen to an assessor giving a student feedback on a practice IELTS Task 1 piece of writing.Identify and select the range (High Range,Mid-Range,Low Range) the feedback is related to for each criterion.",

      },
  
      {
        isExplanation: true,
        explanationTitle: "Audio",
        audio: 'audio/55.mp3',
      },
      {
        image: 'images/55.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "High Range",
        
      },
      {
        image: 'images/54.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "High Range",
        
      },
      {
        image: 'images/56.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "High Range",
        
      },
      {
        image: 'images/57.png',
        isChoice: true,
        choices: [
          "High Range",
          "Mid-Range",
          "Low Range"
        ],
        answer: "High Range",
        
      },
      

      
    
    ]
  },
  'activity-4': {
    title: 'Map activities',
    timeLimit: '40 minutes',
    exercises: [
     
      {
        question: 'Spot the difference \n Look at the text below which shows the changes that occurred in town of Denham from 1986 to the present moment. The text differs from the information on the maps in 14 ways. Can you find the differences? At the end of each paragraph, the number of differences is given in parentheses.  \n\n The three maps illustrate the developments that have taken place in town of Denham from 1986 to the present day (1).\nOverall, the town has notably shown a decrease in housing development which indicates a population decline and shift towards agriculture and farming ( 3)\n One change that stands out is that there has been a significant redevelopment over the whole period. To the west of the river Stoke, housing now dominates the area of what was once farmland. In 1986, there were not shops and just a few residential properties. Now, there are neither shops nor post office left, although the farmland is still there. The bridge over the river Stoke did not stand now as it did not in 1986. (6) \nAnother significant change is that more roads have been built around the housing complex. In addition, the gardens, that were behind he large house in 1986, have been remained, and the house has been reduced in size and converted into a retirement home. The primary school has been demolished. (4)',
        image: 'images/24.png',
        answer: 'The two maps illustrate the developments that have taken place in town of Denham from 1986 to the present day \nOverall, the town has notably shown an increase in housing development which indicates a population growth and move away from agriculture and farming.\nOne change that stands out is that there has been a significant redevelopment over the whole period. To the east of the river stoke, housing now dominates the area of what was once farmland. In 1986, there were shops and just a few residential properties. Now there are neither shops nor farmland left, although the post office is still there. The bridge over the river stoke still stands as it did in 1986.\nAnother significant change is that more roads have been built around the housing complex. In addition, the gardens that were in front of the large house in 1986, have been removed and the house has been expanded and converted into a retirement home. The primary school still stands and has been extended since that time.',
        placeholder: 'Product category',
      
      },
     
      {
        question: 'In the text below there is a word missing in each line. Read the text carefully and find these words. You might refer to the list of the missing words at the bottom of the exercise, if you find this activity challenging \n\n  The two maps the developments that have taken place in town of Denham from 1986 to the present day \nOverall, the town has notably shown an increase in housing development indicates a population growth and move away agriculture and farming.\nOne change that stands out that there has been a significant redevelopment over the whole period. To the east of the river Stoke, housing now the area of what was once farmland. In 1986, there were shops and just a few residential properties. Now there are neither shops nor farmland left, the post office is still there. The bridge the river Stoke still stands as it did in 1986.\nAnother significant change is that more roads have built around the housing complex. In addition, the gardens that in front of the large house in 1986, have been removed and the house has been expanded and converted a retirement home. The primary school still stands and has been extended since that time. \n\n Words: \n were, although, dominates, from, into, which, been, over, is, illustrate',

        answer: ["were", "although", "dominates", "from", "into", "which", "been", "over", "is", "illustrate"],
        placeholder: 'Product category',

      
      },
   
      {
        question:"Insert the phrases below in a suitable blank space in the text, which follows. \n \n  A. what was once farmland\nB. still stands as it did\nC. over the whole period\nD. has been extended since that time\nE. has been expanded and converted…\nF. Another significant change is that…\nG. a population growth\nH. One change that stands out is that…\nI. The two maps illustrate\n \n \n \n1.____________ the developments that have taken place in town of Denham from 1986 to the present day\nOverall, the town has notably shown an increase in housing development which indicates 2.___________ and move away from agriculture and farming.\n3.___________ there has been a significant redevelopment 4.___________.\nTo the east of the river Stoke, housing now dominates the area of 5.___________.\nIn 1986, there were shops and just a few residential properties.\nNow there are neither shops nor farmland left, although the post office is still there.\nThe bridge over the river Stoke 6.___________ in 1986.\n7.____________ more roads have been built around the housing complex.\nIn addition, the gardens that were in front of the large house in 1986, have been removed and the house 8.___________ into a retirement home.\nThe primary school still stands and 9.___________.\n",
        answer:[
        'I',
          'G',
          'H',
          'C',
          'A',
          'B',
          'F',
          'E',
          'D'

          ],
          multipleInputs: true,
          placeholder: 'Enter the letter of the correct answer...',
      },
      {
        question:"Choose the appropriate verb, which is correct in each case. Note there may be more than one suitable answer.\nIn this task, there are two maps referring to different tenses, the past (1986) and present. In this case, you will need to use the past tense and the present perfect to describe the changes\nThe two maps 1. [A. illustrate B. illustrates C. shows D. has depicted] the developments that 2. [A. takes place B. are taken place C. happened D. have taken place] in town of Denham from 1986 to the present day.\nOverall, the town 3. [A. show B. was C. showed D. has shown] an increase in housing development which 4. [A. have indicated B. was established C. indicates D. built] a population growth and move away from agriculture and farming.\nOne change that stands out is that there 5. [A. were B. was established C. had been D. has been] a significant redevelopment over the whole period. To the east of the river Stoke, housing now 6. [A. expanded B. dominates C. was built D. were constructed] the area of what was once farmland. In 1986, there 7. [A. were B. had been C. are D. was] shops and just a few residential properties. Now there are neither shops nor farmland left, although the post office is still there. The bridge over the river stoke still stands as it did in 1986.\nAnother significant change is that more roads 8. [A. have built B. was established C. was built D. have been built] around the housing complex. In addition, the gardens that were in front of the large house in 1986, 9. [A. have removed B. was constructed C. have been removed D. built] and the house has been expanded and converted into a retirement home. The primary school still stands and 10. [A. erects B. has been extended C. was expanded D. were converted] since that time.",
        multipleInputs: true,
        answer: [
          'A',
          'D',
          'C',
          'C',
          'D',
          'B',
          'A',
          'D',
          'C',
          'B'
        ]
      }

    ]
  },
  'activity-5': {
    title: 'Bar chart activities',
    timeLimit: '40 minutes',
    exercises: [
     
      {
        question:"Write an overview for the following chart in the box and then compare your answer with the sample answer provided. \n\n The bar chart below shows the number of Facebook users in five different cities in January of 2010 and 2015.",
        image: 'images/69.png',
        answer:"Overall, the number of users increased in all cities over the period, with Tokyo recording the highest figure in 2015. In contrast, Mumbai experienced a significant decline, falling from the highest number in 2010 to the lowest in 2015."
      },
      {
        question:"Write an overview for the following chart in the box and then compare your answer with the sample answer provided.  \n\n The bar chart below shows the number of people travelling by train between Milan and Rome over a 2-month period in 2012.",
        image: 'images/70.png',
        answer:"Overall, it is clear that train travel in both directions followed similar trends, with the highest number of travelers recorded in the third week of both January and February. However, the total number of commuters was lower in February compared to January."
      },
      {
        question:"Write an overview for the following chart in the box and then compare your answer with the sample answer provided. \n\n The bar chart below details the proportion of people listening to 3 types of music in four various cities in 2012.",
        image: 'images/71.png',
        answer:"Overall, rock music was more popular in Helsinki, Oslo, and Berlin, while pop was the preferred genre in the Czech Republic. Rap was the least favored option in all the cities except Oslo."
      },
      {
        question:"What similarities do you notice between four cities?   \n\n\n The bar chart below shows the proportion of total household expenditure used on different services in 4 cities in 2012.",
        image: 'images/72.png',
        answer:"Among the four services, citizens allocated the largest proportion of their expenditure to transport. It is also noteworthy that Luxembourg and London displayed similar spending patterns."
      },
      {
        question:"What differences do you notice between four cities? \n\n\n The bar chart below shows the proportion of total household expenditure used on different services in 4 cities in 2012.",
        image: 'images/72.png',
        answer:"London households spent significantly more on all four services than the other three nationalities, with transport being the most expended service. Although Luxembourg and London exhibited similar spending patterns, Luxembourg was the lowest spender across all services."
      },

      {
        question: 'There are more reasons given in the following chart which can make the writer confused about how to group the reasons.How would you classify the reasons mentioned in the following bar chart in order to group easily?',
        image: 'images/25.png',
        answer: 'Some disturbances are caused by noise, while others are unrelated to sound. Therefore, the causes can be categorized into noise-related and non-noise-related disturbances',
        
      
      },
      {
        question:"Which chart shows change over time? Click the alternative(s) you choose and then see the correct answer.",
        isChoice: true,
        isChoiceImages: true,
        choices: [
          'images/26.png',
          'images/27.png',
          'images/28.png',
        ],
        answer: 'images/26.png',
      },{
        question:"In which chart should the language of change be used? Click the alternative you choose and then see the correct answer",
        isChoice: true,
        isChoiceImages: true,
        choices: [
          'images/29.png',
          'images/30.png',
          'images/31.png',
        ],
        answer: 'images/29.png',
      },
      {
        question:"In which chart should the language of comparison and contrast be used? Click the alternative you choose and then see the correct answer.",
        isChoice: true,
        isChoiceImages: true,
        choices: [
          'images/32.png',
          'images/33.png',
          'images/34.png',
        ],
        answer: 'images/32.png',
      },
      {
        question:"In which chart should both the language of change and the language of comparison be used? Click the alternative you choose and then see the correct answer.",
        isChoice: true,
        isChoiceImages: true,
        choices: [
          'images/35.png',
          'images/36.png',
          'images/37.png',
        ],
        answer: 'images/35.png',
      },
   
      {
        question:"Look at the following bar chart. Write a paragraph about the males’ result, using the words and phrases from the below and then compare your answer with the sample after submitting it. \n\n\n\n\ Words : \n Range from … to, the highest figure, more noticeable, the lowest point, higher, dominated, on the contrary, respectively.",
        image: 'images/38.png',
        answer:'There were significant differences in the number of jobs held by men across different sectors, ranging from a low of 30,000 to a peak of 450,000. The highest male employment was recorded in the "other" category, where approximately 150,000 more men were employed compared to women. Male dominance was also evident in manufacturing and construction, with figures reaching 200,000 and 150,000 respectively. In contrast, the lowest levels of male employment were seen in education and healthcare, with only 30,000 and 40,000 men working in these sectors.'
        
      },
     {
      question:"Fill in the gaps, choosing the appropriate transition, conjunction and phrase below .There are extra words. \n\n Words: \n whereas, by far the most popular, similarly, compared to, but, by contrast, however, and, likewise, more popular    \n\nMathematics was the preferred subject for male students; ….. , female students showed a greater interest in linguistics\nThe highest figure shows that literature was …..  subject for women.\nFootball was the favorite sport among boys, …..  girls showed a stronger preference for volleyball\nThe birth rate of older women increased. ….. , the percentage of teenage mothers decreased.\nIn the 19th century, Ireland’s population made up 8 million …..  Germany’s 20 million.",
      multipleInputs: true,
      answer: [
        'however',
        'by far the most popular',
        'whereas',
        'by contrast',
        'compared to'
      ],

     },
     {
      question:"The paragraphs below are out of order.Reorder them based on the bar chart below. \n \n 1)Rome had the second-highest spending on the four services after London, surpassing the other two cities. Transport was the largest expenditure in Rome, accounting for 6.5% of household income. In contrast, health received the smallest share, with 4.5%, while education accounted for 5.5%. In Berlin, both health and education had equal allocations, each representing 4.2% of household spending, followed by restaurants and hotels, which received the lowest share  \n\n 2)The bar chart gives a description of the percentage of household expenditures on four services in four European cities in 2012. \n\n 3)London households spent significantly more on all four services than the other three nationalities, allocating 7% of their income to transport, which was 1.5% higher than their spending on restaurants and hotels. Education received the lowest share at 4.5%, slightly below the figure for health. Although Luxembourg and London showed similar spending patterns, Luxembourg consistently spent the least on all four services among the four cities. In Luxembourg, 4.5% of income was allocated to transport, followed by 3.5% to restaurants and hotels, which was 1% higher than the amount spent on education,being the least expended sector. \n\n 4)Among the four services, citizens allocated the largest proportion of their expenditure to transport. It is also noteworthy that Luxembourg and London displayed similar spending patterns. \n\n",
      answer:"2,4,3,1",
      image: 'images/72.png',
      placeholder: "Enter the numbers of the paragraphs in the correct order, separated by commas."
    },
    {
      question:"Choose the appropriate word from the box to fill the gap. Two answers are possible. \n\n Words : \n By contrast, while, although, yet, compared with, however, likewise, slightly higher, despite  \n\n\n 1. Approximately a fifth of the French read the adventure …..  the figure for the Spanish is 8 % higher, at 30%.\n2. Fish was consumed least in Japan. ….. , hamburger had a larger share of consumers in the same country.\n3. The French consumed 11 kg per person on a weekly basis. ….. , the Dutch consumed 9 kg.\n4. The consumption of fast food is .....  among Americans than Europeans.\n5. Basketball was still popular in Italy …..  its slight decrease 8 years later.\n6. Males spent more time on reading; ….. , females were more interested in cooking.\n7. The English spent 28% of their time on games …..  just 12% of their time on social networking.\n8. People aged 30-39, ….. , dedicate 20% of their time to gardening.",
      multipleInputs: true,
      answer: [
        'while',
        'By contrast',
        'Likewise',
        'slightly higher',
        'despite',
        'however',
        'compared with',
        'however'
      ],
      placeholder: 'Enter the correct word...'

    },
    {
      question:"Identify the language of comparison and contrast in the following paragraphs.Type your answers in the box below,and then review the provided answer. \n\n There was a considerable gender disparity across faculties, with Engineering predominantly staffed by male academics, whereas Education employed the highest proportion of female staff.\nSpecifically, 85% of Engineering faculty members were male, compared to only 15% who were female.\nIn contrast, women filled three quarters of the academic positions in education, with men accounting for just 25%.\nHowever, other faculties showed a more balanced gender distribution.\nIn medicine, the representation of men and women was nearly equal, while in the arts, slightly more than half of the academic staff were female (55%).\nNotably, both business and science had identical gender ratios, with 65% of the academics being male and 35% female.\nIn the field of law, the proportion of female staff was slightly higher than in business and science, standing at 40%.\nAlthough the faculties of engineering, business, science, and law remained predominantly male-dominated in 2012, women constituted half of the faculty in medicine and formed the majority in both education and the arts.",
      image: 'images/62.png',
      answer:"predominantly, whereas, compared to, in contrast, accounting for, however,more, nearly equal, slightly more than half, identical, slightly higher, although",
    },
    {
      question:"The following task scores a low score. Improve it to get a higher score and then compare your version with the sample answer. \n\n The bar chart shows the causes of disturbance at the theatre. Overall, the most irritating action is rustling sweet papers. Its percentage is 90%.\nWe can see from the chart that the most percentage belongs to rustling sweet papers. The next high percentage is coughing which makes up 75%. Whispering accounts for 60%. The percentage of sneezing is 45%. Snoring disturbs 30% of the theatre-goers. Mobile phones disturb 50% of the participants.\nThere are some irritants which are not related to noise. Among them, arriving late has the highest percentage, at 70%. The second highest in this group is tall people with 30%. Big hairdos irritate a lower percentage of people. Armrest hogging has the lowest percentage in this group which makes up 20%.",
      image:"images/63.png",
      answer:"The bar chart illustrates the results of a survey conducted among theatre-goers regarding the causes of irritation during performances. Overall, most of the reported disturbances are related to noise, whereas those causing the least irritation are connected to non-noise factors.\nWith regard to noise factors, rustling sweet paper is the most irritating, affecting 90% of respondents, followed by coughing at approximately 75%. The next most disturbing noises are mobile phone sounds and whispering, reported by just over 50% and just under 50% of participants, respectively. Among noise-related irritations, flash photography is the least bothersome at around 25%, slightly lower than the proportions of snoring and bleeps.\nRegarding the non-noise factors, arriving late is the most distracting at about 70% compared to armrest hogging at 20%, which is the lowest point of the chart."
    },

    



      

    ]
  },
  'activity-6': {
    title: 'Process activities',
    timeLimit: '40 minutes',
    exercises: [
      {
        question:"Paraphrase the following rubric.Type your answer in the box and compare it with the sample answer provided. \n The diagram below details the process of making clothes from plastic bottles.",
        image:"images/39.png",
        answer:"The diagram explains the ways in which plastic bottles are reused to be transformed into clothing in the clothing manufacture"

      },
      {
        question:"Paraphrase the following rubric.Type your answer in the box and compare it with the sample answer provided.\n The diagram below shows the life cycle of mosquito.",
        image:"images/40.png",
        answer:"The diagram illustrates several stages which the mosquito goes through in its life span."
      },
      {
        question:"Paraphrase the following rubric.Type your answer in the box and compare it with the sample answer provided.\n The diagram below shows the life cycle of the plant with fruit.",
        image:"images/41.png",
        answer:"The picture illustrates several stages that a plant goes through in its life cycle."
      },
      {
        question:"Write an overview for the following diagram in the box and then compare your answer with the sample answer provided.",
        image: 'images/42.png',
        answer:"Overall,there are several stages in the process,commencing with collecting plastic bottles and culminating in making clothes."
      
      },
      {
        question:"Write an overview for the following diagram in the box and then compare your answer with the sample answer provided.",
        image: 'images/43.png',
        answer:"Overall,the process includes several steps in which an adult female mosquito lays eggs which develop through several stages to adulthood."
      },
      {
        question:"Write an overview for the following diagram in the box and then compare your answer with the sample answer provided.",
        image: 'images/44.png',
        answer:"Overall,the cyclical process consists of several developmental stages of a plant with fruit,including seed,germination,seedling,and maturity."
      },
     
      {
        question:"The paragraphs above are out of order . Reorder them based on the diagram below \n Paragraphs : \n 1)The control segment consists of a number of monitor stations at different locations on Earth and a  main control centre in Colorado, USA.  Any slight changes in the orbit of the satellites can be  detected by the monitor stations.  This information is then sent to the control centre, and from here it  is transmitted back to the satellites.  Consequently, the satellites can always transmit their exact  position to users. \n 2)The diagram shows how someone can find their exact location anywhere in the world by means of  the Global Positioning System (GPS).  \n 3)The system has three main segments:  the space segment,  the control segment and the user segment. \n 4)The user segment is basically a hand¬held receiver capable of picking up signals from the satellites.  The receiver compares the time a signal was sent with the time it was received. As a result, the  distance between the user and the satellite can be calculated.  By taking similar measurements from four satellites, the receiver can pinpoint the exact location and altitude of the user on Earth. \n 5)The space segment consists of 24 satellites which are put into orbit at an altitude of about 20,000 km.  Each one takes 12 hours to orbit the earth once.  They have solar panels which provide power and antennae in order to receive and transmit data.  Each satellite continually transmits a coded message which includes information about its position and the exact time of transmission.  The satellites are  fitted with atomic clocks so that time is kept with great accuracy. \n\n\n \n The diagram shows how the Global Positioning System (GPS) works in order to help people find their location anywhere on Earth.",
        image: 'images/45.png',
        answer:[
          "2,3,5,1,4",
          "2,3,1,4,5",
          "2,3,4,1,5",
          "2,3,4,5,1",
          "2,3,5,4,1"
          
        ],
        placeholder: "Enter the numbers of the paragraphs in the correct order, separated by commas."
      },
     
      {
        question:"The following task scores a low score. Improve it to get a higher score and then compare your version with the sample answer.  \n\n The diagram below shows the life cycle of a plant with fruit.Summarise the information by selecting and reporting the main features,and make the comparisons where relevant.  \n\n Sample answer : \n\n The diagram shows different stages of the life cycle of a plant with fruit.The process begins with the seed.The workers plant the seed  and add the water.It is followed by the process of germination.Then the sprout process happens.The sprout grows and become a young plant.The leaves become bigger,and this plant begins to seedle.In the next stage,the buds appear.After some time,the buds change into flowers.Following this,fruit is formed.Next,the fruit with seeds is picked to collect the seeds.The cycle is then repeated.",
        image: 'images/46.png',
        answer:"The picture illustrates several stages that a plant with fruit goes through in its life cycle. Overall,the cyclical process consists of several developmental stages of a plant with fruit,including seed,germination,seedling,and maturity.The process commences when mature seeds from the fruit are planted in the soil.At this point of the process,water is added to stimulate germination.As the seeds begin to germinate,roots appear, develop and grow downward into the soil.In the following phase, a sprout emerges above the ground, producing its first leaves.,after which the young plant grows and becomes mature.After the leaves become larger in size,the plant begins to seedle,which is followed by the appearance of buds on the plant.After specific duration,buds bloom into flowers.The plant blossoms before producing fruit with seeds. Once the fruit ripens, seeds are extracted and can be replanted to begin the cycle again"
      },
      {
        question:"The paragraphs below are out of order . Reorder them based on the diagram below. \n The diagram shows how the Global Positioning System (GPS) works in order to help people find their location anywhere on Earth. \n\n Paragraphs : \n 1)The control segment consists of a number of monitor stations at different locations on Earth and a  main control centre in Colorado, USA.  Any slight changes in the orbit of the satellites can be  detected by the monitor stations.  This information is then sent to the control centre, and from here it  is transmitted back to the satellites.  Consequently, the satellites can always transmit their exact  position to users. \n 2)The diagram shows how someone can find their exact location anywhere in the world by means of  the Global Positioning System (GPS). \n 3)The system has three main segments:  the space segment,  the control segment and the user segment. \n 4)The user segment is basically a hand¬held receiver capable of picking up signals from the satellites.  The receiver compares the time a signal was sent with the time it was received. As a result, the  distance between the user and the satellite can be calculated.  By taking similar measurements from four satellites, the receiver can pinpoint the exact location and altitude of the user on Earth. \n 5)The space segment consists of 24 satellites which are put into orbit at an altitude of about 20,000 km.  Each one takes 12 hours to orbit the earth once.  They have solar panels which provide power and antennae in order to receive and transmit data.  Each satellite continually transmits a coded message which includes information about its position and the exact time of transmission.  The satellites are  fitted with atomic clocks so that time is kept with great accuracy.",
        image: 'images/64.png',
        answer:[
          "2,3,5,1,4",
          "2,3,1,4,5",
          "2,3,4,1,5",
          "2,3,4,5,1",
          "2,3,5,4,1"

        ],
        placeholder: "Enter the numbers of the paragraphs in the correct order, separated by commas."
      },
      {
        question:"The following task scores a low score. Improve it to get a higher score and then compare your version with the sample answer. \n \n The diagram below shows the life cycle of a plant with fruit.Summarise the information by selecting and reporting the main features,and make the comparisons where relevant.  \n\n  Sample answer: \n The diagram shows different stages of the life cycle of a plant with fruit. \n The process begins with the seed.The workers plant the seed  and add the water.It is followed by the process of germination.Then the sprout process happens.The sprout grows and become a young plant.The leaves become bigger,and this plant begins to seedle.In the next stage,the buds appear.After some time,the buds change into flowers.Following this,fruit is formed.Next,the fruit with seeds is picked to collect the seeds.The cycle is then repeated.",
        image: 'images/46.png',
        answer:"The picture illustrates several stages that a plant with fruit goes through in its life cycle. Overall,the cyclical process consists of several developmental stages of a plant with fruit,including seed,germination,seedling,and maturity.\nThe process commences when mature seeds from the fruit are planted in the soil.At this point of the process,water is added to stimulate germination.As the seeds begin to germinate,roots appear, develop and grow downward into the soil.In the following phase, a sprout emerges above the ground, producing its first leaves.,after which the young plant grows and becomes mature.After the leaves become larger in size,the plant begins to seedle,which is followed by the appearance of buds on the plant.After specific duration,buds bloom into flowers.The plant blossoms before producing fruit with seeds. Once the fruit ripens, seeds are extracted and can be replanted to begin the cycle again."
      },
      {
        question:"Look at the diagram below. Complete this description of the process by using words and phrases below. \n\n Phrases : \n as a result,because,causes,consequently,due,give rise to,on account of,results in \n\n Water leaks slowly into the cave 1……… there are thousands of tiny cracks and holes in the limestone rock. On its way down, the water absorbs the calcium carbonate present in the rock and this 2……… a mineral solution. Small drops of this solution form on the roof of the cave. When each drop falls, it leaves behind a ring-shaped deposit of calcite. This process is repeated many times and 3……… a thin calcite tube is formed. This tube is sometimes called a soda straw 4……… its shape. Occasionally the soda straw gets blocked 5……… to a piece of stone or soil. This 6……… the drops of solution to pour down the outside of the straw. 7………, calcite deposits build up around the straw and these 8……… the typical cone shape of the stalactite. Only the straws that get blocked will eventually become stalactites. ",
        answer: [
          'because',
          'results in',
          'as a result',
          'on account of',
          'due',
          'causes',
          'consequently',
          'give rise to'
        ],
        multipleInputs: true,
        image:'images/65.png',
      },
      {
        isExplanation: true,
        explanationTitle: "Task Instruction",
        explanationContent:"Now look at the following active sentences and rewrite them in the passive voice."
      },
      {
        question:"Many farmers grow rice in China.",
        answer:"Rice is grown in China.",
      },
      {
        question:"Trucks transport the ready products to customers.",
        answer:"The ready products are transported to customers.",
      },
      {
        question:"The worker waters the plants to grow.",
        answer:"The plants are watered to be grown.",
      },
      {
        question:"They use plastic bottles to make clothes.",
        answer:"Plastic bottles are used to make clothes.",
      },
      {
        question:"They add water and sand to the mixture.",
        answer:"Water and sand are added to the mixture."
      },
      {
        question:"Join two sentences together into a single sentence with the subordinators.You can use more than one version.Then submit your answer and see the provided answer.\nThe tomatoes are picked.Then they are immediately transported to the factory by truck.",
        answer:[
          "After the tomatoes are picked,they are transported to the factory by truck.",
          "Once the tomatoes have been picked,they are transported to the factory.",
          "Having been picked,the tomatoes are transported to the factory."
        ]
      },
      {
        question:"Join two sentences together into a single sentence with the subordinators.You can use more than one version.Then submit your answer and see the provided answer.\n The tomatoes are transported to the factory.Then they are washed.",
        answer:['Before the tomatoes are washed,they are transported to the factory', 'The tomatoes are transported to the factory,which is followed by the washing process', 'The tomatoes are transported to the factory prior to being washed', ' After the tomatoes are transported to the factory,they are washed', ' Once the tomatoes have been transported to the factory,they are washed', 'Having been transported to the factory,the tomatoes are washed there']

      },
      {
        isExplanation: true,
        explanationTitle: "Task Instruction",
        explanationContent:"Look at these ways of explaining or expressing the purpose of something. Choose the best way to complete the sentences.",

      },
      {
        question:"The vegetables are washed ….. remove the impurities",
        isChoice: true,
        choices: [
          "in order to",
          "so as",
          "to"
        ],
        answer: "in order to"
      },
      {
        question:"The special tools are used ….. the products can be weighed accurately.",
        isChoice: true,
        choices: [
          "so that",
          "so as",
          "in order to"
        ],
        answer: "so that"
      },
      {
        question:"….. dry in the sun,the leather is hung over the rope.",
        isChoice: true,
        choices: [
          "in order to",
          "so as",
          "to"
        ],
        answer: "in order to"
      },
      {
        question:"Highlight the sequential language in the following paragraphs.Type your answers in the box below,and then review the provided answer. \n In the initial stage of the process, mangoes are grown in mango fields prior to being gathered as a harvest. Harvested fruits are then carried to the factory by truck to be processed. The subsequent stage is when mangoes are sorted in the factory so that the quality of mango juice could be ensured. As the fruits are selected,the rotten ones are delivered to farms in order to be used as animal feed. \n\n\nFollowing the selection stage, the high-quality mangoes are exposed to the process of washing. Once the fruits have been cleaned, they are then ready for preheating. Having undergone the process of preheating , they are removed from gasses, after which the degassed mangoes, destined to become mango juice, are homogenized. The resulting liquid then goes through sterilization which precedes the penultimate step, followed by packing. The last step involves transportation to dispatch ready products to their final destinations.\n",
        answer:"In the initial stage,then,The subsequent stage,Following,Once,the penultimate step,followed by,the last step",

      }
    ] 
  }

};

export const getExamData = (slug: string): ExamData | null => {
  return examDataMap[slug] || null;
};

export const getAllActivitySlugs = (): string[] => {
  return Object.keys(examDataMap);
};