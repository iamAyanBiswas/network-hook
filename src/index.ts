interface networkHookTypes{
  state:()=>string
  onOnline:(e:()=>any)=>void
  onOffline:(e:()=>any)=>void
}




const windowError=()=>{
  if(typeof(window)==='undefined'){
    throw new Error('This package is only for web')
  }
}

function state():string{
  windowError()
  if(navigator.onLine===true) return 'online'
  else return 'offline'
}


function onOffline(callback:() => any){
  windowError()
  window.onoffline=()=>{
    callback()
  }
}
function onOnline(callback:() => any){
  windowError()
  window.ononline=()=>{
    callback()
  }
}

const networkHook:networkHookTypes={
  state:state,
  onOnline:onOnline,
  onOffline:onOffline
}


export default networkHook
