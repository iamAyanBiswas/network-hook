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

function networkHookFunction(mood:'online'|'offline', callback:() => any): void{
  windowError()
  window.ononline=callback()
  window.onoffline=callback()
}



const networkHook:networkHookTypes={
  state:state,
  onOnline:(callback)=>{networkHookFunction('online',callback)},
  onOffline:(callback)=>{networkHookFunction('offline',callback)}
}


export default networkHook
