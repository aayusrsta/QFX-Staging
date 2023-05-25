
interface IProps {}

/**
* @author
* @function @
**/


const convertMinsToTime = (mins:any) => {
    const hours = Math.floor(mins / 60);
    let minutes: any = mins % 60;
    minutes  = minutes < 10 ? '0' + minutes : minutes;
    return `${hours} Hrs:${minutes} Mins`;
  } ;
  export default convertMinsToTime;
