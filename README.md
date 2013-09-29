<h1>References</h1>
<ul>
  <li>
    <a href="http://www.html5rocks.com/en/tutorials/speed/static-mem-pools/" target="_blank">Static Memory Javascript with Object Pools</a>
  </li>
</ul>
<div class="highlight highlight-javascript">
<pre>
var Connect = function(){};
Connect.prototype._init = function(){}
var connectPool = new ObjectPool(Connect);
</pre>
</div>
