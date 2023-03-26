
//2D heart

//https://iquilezles.org/articles/distfunctions2d/
// float sdHeart( in vec2 p )
// {
//     p.x = abs(p.x);

//     if( p.y+p.x>1.0 )
//         return sqrt(dot2(p-vec2(0.25,0.75))) - sqrt(2.0)/4.0;
//     return sqrt(min(dot2(p-vec2(0.00,1.00)),
//                     dot2(p-0.5*max(p.x+p.y,0.0)))) * sign(p.x-p.y);
// }

function sHeart(pixel){
    const pixel_x = Math.abs(pixel[0]);
    const pixel_y = pixel[1];
    const arc_center = [25.0, 75.0];
    const arc_y = [0.0, 100.0];
    //when point is above y = -x + 100, sdf = point to circle

    const dx_center = pixel_x - arc_center[0];
    const dy_center = pixel_y - arc_center[1];

    if (pixel_x + pixel_y > 100.0){
        return Math.sqrt(dx_center * dx_center + dy_center * dy_center) - Math.sqrt(2.0) * 25.0;
    }

    //When point is below y = -x
    //S1 point is more close to (0, 100)
    const s1_distx = pixel_x - arc_y[0];
    const s1_disty = pixel_y - arc_y[1];
    const s1_distsquare = s1_distx * s1_distx + s1_disty * s1_disty;

    //s2 point is more close to line y = x
    const pixel_sumxy = pixel_x + pixel_y;
    const s2_distx = pixel_x - 0.5 * Math.max(pixel_sumxy, 0);
    const s2_disty = pixel_y - 0.5 * Math.max(pixel_sumxy, 0);
    const s2_distsquare = s2_distx * s2_distx + s2_disty * s2_disty;

    //s2 return
    return Math.sqrt(Math.min(s1_distsquare, s2_distsquare)) * Math.sign(pixel_x - pixel_y);
}

//3D heart
