function areDistinct (str: string, i: number, j: number): boolean {
  let visited = new[26];
  for(let k = i; k <= j; k++)
      {
        if(visited[str.charAt(k) - 'a'] == true) return false;
        
				visited[str.charAt(k) - 'a'] = true;
      }
				return true;
  
}

function lenghtOfLongestSubstring(s: string): number{
	var n = str.length();
	var res = 0;

	for(var i = 0; i < n; i++)
			for(var j = 0; j < n; j++)
				if (areDistinct(str, i, j))
					res = Math.max(res, j - i + 1);
	return res;

};

// eg
													 
let str = "temptempAB"
var len = lenghtOfLongestSubstring(str);
console.log(str, len);
