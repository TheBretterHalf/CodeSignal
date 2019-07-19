function firstDuplicate(a) {
    var ar = [];
    for(i=0; i<a.length; i++)
    {
        for(j=i+1; j<a.length; j++)
            {
            if(a[i]==a[j])
                {
                    let compi=a.indexOf(a[i])
                    let compj=a.indexOf(a[i], i+1)
                    ar.push(compj)
                }

            }
    }
    if(ar.length>0)
    {
        console.log(ar)
        let minval = Math.min(...ar)
        console.log(a[minval])
    }
    else
    {
        return(-1);
    }
    
}
