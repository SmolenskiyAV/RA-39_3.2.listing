import "./css/main.css";
import Listing from "./components/Listing";
import * as file from './data/etsy.json'

function App() {
 const i = 3;
 // console.log('length= ', file.length); // А ЭТА ШТУКА ВЫВОДИТ ЗНАЧЕНИЕ, НО РЕАКТ РУГАЕТСЯ. Почему так???
  const dataStr = JSON.stringify(file);
  const dataArr = Object.values(JSON.parse(dataStr));
  dataArr.splice(25, 2) // после деструктуризации в конце массива появляется "элемент-клон этого же массива" - вырезаем его нафиг!
  
  console.log('data: ', dataArr);               // КОНТРОЛЬНАЯ ТОЧКА
  console.log('length= ', dataArr.length);      // КОНТРОЛЬНАЯ ТОЧКА
  console.log(dataArr[i].MainImage.url_570xN);  // КОНТРОЛЬНАЯ ТОЧКА

  return (
    <>
    <Listing dataArr={dataArr} />
    </>
  );
}

export default App;
