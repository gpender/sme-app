module.exports = (app) =>{
  app.get('/',(req,res)=>{
    console.log('here');
    res.send('hello');
  })
}
