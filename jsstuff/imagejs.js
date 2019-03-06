


let normalize_kernel  = (kernel) => {
    let flatten_kernel = kernel.reduce((a,b) => a.concat(b));
    let norm = flatten_kernel.reduce((a,b) => a+b);
    let res = kernel.map((x)=>x.map((y)=>y/norm));
    return res;
};

function create_kernels(kernel){
    let flatten_kernel = kernel.reduce((a,b) => a.concat(b));
    let maxabs = flatten_kernel.reduce((a,b) => max(Math.abs(a),Math.abs(b)));
    let ratio = kernel.map((x)=> x.map((y)=>y/maxabs));
    let tl = ratio.clone();
    tl.map((x,i)=>x.map((y,j)=>{ 
            if(i==0 || j==0){ 
                return 0;
            }else{
                return y;
            }
        }));

}