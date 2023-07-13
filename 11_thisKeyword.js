let laptop = {
    cpu : "i3",
    ram : "8GB",
    getBrand : function(){
        return "Mac"
    },
    getPrice : () => "90k",

    getConfig : function(){
        console.log(this.cpu)
        console.log(this.ram)
        console.log(this.getBrand())
        console.log(this.getPrice())
    }
}

laptop.getConfig()
