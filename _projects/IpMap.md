---
github_name: IpMap
---

IpMap
=====

This is a browsable map showing geographic locations of to IPv4 addresses. It was inspired by [xkcd 195, Map of the Internet](http://xkcd.com/195).

Zoom with the mouse wheel, drag and drop to scroll (as on Google maps). In each square, hue indicates the majority location and saturation indicates the part of the square occupied by this location.

<div id="map"></div>

For technical details and hacking, see [IpMap on Github](http://github.com/jacquev6/IpMap).

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.11/jquery.mousewheel.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/jacquev6/IpMap/master/src/hilbert.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/jacquev6/IpMap/master/src/color.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/jacquev6/IpMap/data/ip_data.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/jacquev6/IpMap/master/src/ip_map.js"></script>
<script type="text/javascript">
    function parseQueryString(search) {
        r = {};

        var parts = search.split('&');
        for(var i in parts) {
            if(parts[i] != '') {
                nameValue = parts[i].split('=');
                r[nameValue[0]] = nameValue[1];
            }
        }

        return r;
    }

    $(document).ready(function() {
        map = IpMap('map', 512, 16, parseQueryString(location.search.substr(1)));
        map.change(function(state) {
            history.pushState({}, '', location.href.replace(location.search, '') + '?' + $.param(state));
        });
    });
</script>
