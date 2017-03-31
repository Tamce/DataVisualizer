function Data(arr)
{
	this.data = arr;
	this.origin = [];
	for (var i = 0; i < arr.length; i++)
	{
		this.origin.push(arr[i]);
	}
	this.animate = [];
	this.get = function (i) {
		d = this.data[i];
		this.animate.push({type: "get", index: i, value: d});
		return d;
	};
	this.set = function (i, d) {
		this.animate.push({type: "set", index: i, value: d});
		return this.data[i] = d;
	};
	this.length = () => this.data.length;
}