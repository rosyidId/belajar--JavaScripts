const Location = {
    name : 'Indonesia',
    city : 'Surabaya',
    print: function(){
        const logger  = ()=>{
            console.log(this);
            console.log("lokasi",this.city);
        }

        setTimeout(logger, 100)
    }
}

Location.print();
