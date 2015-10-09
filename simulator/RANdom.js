/**
 * Created by ballamo on 9/10/15.
 */
function Random(a,b)
{
  var c;
  c = Math.max(a, b);
  var d;
  d = Math.min(a, b);
  return ( Math.random()*(c-Math.abs(d))+d);
}
