const euro=document.getElementById("eu");
const usd=document.getElementById("usd");
const inr=document.getElementById("inr");
const sl=document.getElementById("sl");
const tb=document.getElementById("tb");
const sd=document.getElementById("sd");

euros();
euro.addEventListener('input',euros);
function euros()
{
        const e=parseInt(euro.value);
        const d=1.09*e;
        usd.value=d;
    
        const d1=82.85*e;
        inr.value=d1;
    
        const d2=202.2*e;
        sl.value=d2;
    
        const d3=34.79*e;
        tb.value=d3;
    
        const d4=1.55*e;
        sd.value=d4;
}

indr();
inr.addEventListener('input',indr);
function indr()
{
        const e=parseInt(inr.value);
    
        const d=0.013*e;
        usd.value=d;
    
        const d1=0.012*e;
        euro.value=d1;
    
        const d2=2.44*e;
        sl.value=d2;
    
        const d3=0.42*e;
        tb.value=d3;
    
        const d4=0.019*e;
        sd.value=d4;
}

amr();
usd.addEventListener('input',amr);
function amr()
{
        const e=parseInt(usd.value);
    
        const d=75.9*e;
        inr.value=d;
    
        const d1=0.92*e;
        euro.value=d1;
    
        const d2=185.6*e;
        sl.value=d2;
    
        const d3=31.9*e;
        tb.value=d3;
    
        const d4=1.42*e;
        sd.value=d4;
};

slr();
sl.addEventListener('input',slr);
function slr()
{
        const e=parseInt(sl.value);
    
        const d=0.41*e;
        inr.value=d;
    
        const d1=0.0049*e;
        euro.value=d1;
    
        const d2=0.0054*e;
        usd.value=d2;
    
        const d3=0.17*e;
        tb.value=d3;
    
        const d4=0.0077*e;
        sd.value=d4;
};

thai();
tb.addEventListener('input',thai);
function thai()
{
        const e=parseInt(tb.value);
    
        const d=2.36*e;
        inr.value=d;
    
        const d1=0.029*e;
        euro.value=d1;
    
        const d2=0.031*e;
        usd.value=d2;
    
        const d3=5.82*e;
        sl.value=d3;
    
        const d4=0.045*e;
        sd.value=d4;
};

sing();
sd.addEventListener('input',sing)
function sing()
{
        const e=parseInt(sd.value);
    
        const d=53.33*e;
        inr.value=d;
    
        const d1=0.64*e;
        euro.value=d1;
    
        const d2=0.70*e;
        usd.value=d2;
    
        const d3=130.29*e;
        sl.value=d3;
    
        const d4=22.39*e;
        tb.value=d4;
}
