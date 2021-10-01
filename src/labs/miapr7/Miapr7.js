import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import DnDImage from './dragAndDrop/DnDImage'
import AI from './ai'

import tail from './dragAndDrop/tail.png'
import head from './dragAndDrop/head.png'
import foots from './dragAndDrop/foots.png'
import body from './dragAndDrop/body.png'
import sword from './dragAndDrop/sword.png'

const Miapr7 = () => {
  let [posHead, setPosHead] = useState({ x: 0, y: 0 })
  let [posBody, setPosBody] = useState({ x: 0, y: 0 })
  let [posTail, setPosTail] = useState({ x: 0, y: 0 })
  let [posFoot, setPosFoot] = useState({ x: 0, y: 0 })
  let [posSword, setPosSword] = useState({ x: 0, y: 0 })

  let [isHead, setIsHead] = useState(false);
  let [isBody, setIsBody] = useState(false);
  let [isTail, setIsTail] = useState(false);
  let [isFoot, setIsFoot] = useState(false);
  let [isSword, setIsSword] = useState(false);

  useEffect(() => {
    console.log("Голова: ", posHead);
    console.log("Тело: ", posBody);
    console.log("Ноги: ", posFoot);
    console.log("Хвост: ", posTail);
    console.log("Меч: ", posSword);
  }, [posTail, posHead, posFoot, posTail, posSword]);

  return (
    <div>
      <div className={style.line}>
        <button className="btn btn-dark" id={style.btn} onClick={() => setIsHead(!isHead)}>Head</button>
        <button className="btn btn-dark" id={style.btn} onClick={() => setIsBody(!isBody)}>Body</button>
        <button className="btn btn-dark" id={style.btn} onClick={() => setIsTail(!isTail)}>Tail</button>
        <button className="btn btn-dark" id={style.btn} onClick={() => setIsFoot(!isFoot)}>Foot</button>
        <button className="btn btn-dark" id={style.btn} onClick={() => setIsSword(!isSword)}>Sword</button>
        <button className="btn btn-danger" id={style.btn} onClick={() => AI({
          head: posHead,
          body: posBody,
          tail: posTail,
          foot: posFoot,
          sword: posSword,
        })}>Run</button>
      </div>
      {isHead && <DnDImage img={head} size={280} setPos={setPosHead} />}
      {isBody && <DnDImage img={body} size={200} setPos={setPosBody} />}
      {isTail && <DnDImage img={tail} size={130} setPos={setPosTail} />}  
      {isFoot && <DnDImage img={foots} size={180} setPos={setPosFoot} />}
      {isSword && <DnDImage img={sword} size={100} setPos={setPosSword} />}


    </div>
  );
}

export default Miapr7;

