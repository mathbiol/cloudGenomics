console.log('cloudGenomics :-)!')
//alert(8)

console.log('hello outravez')
cloudGenomics=function(){
    return "Hello!" //
}
ip = document.createElement('input')
ip.id="lala"
document.body.appendChild(ip)
ip.onkeyup=function(){console.log(ip.value)}
s=document.createElement('script')
s.src="https://code.jquery.com/jquery-2.1.4.min.js"
s.onload=function(){
    console.log('e agora ja existe:',typeof(jQuery)) // <-- prova que existes
}
console.log('jQuery ainda nao existe:',typeof(jQuery))
document.head.appendChild(s)