const createId = function(){
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000000);
  return `${timestamp}${randomNum}`
}

export default createId