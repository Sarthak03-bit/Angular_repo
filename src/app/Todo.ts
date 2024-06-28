export class Todo{
    sno: number
    title: string
    desc: string
    active: boolean
    constructor(){
        this.sno = 0
        this.active =false
        this.title = ''
        this.desc = ''
    }
}