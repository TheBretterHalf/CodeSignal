function containsDuplicates(a) {
    for(i=0; i<a.length; i++)
    {
        for(j=i+1; j<=a.length; j++)
            {
            if(a[i]==a[j])
                {
                    return(true);
                }
            }
    }
    return(false);
}
