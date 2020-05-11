
if(!Koowa) {
    /** @namespace */
    var Koowa = {};
}

Koowa.getSelect2Options = function(options) {
    var defaults = {
        width: "resolve",
        minimumInputLength: 2,
        queryVarName: "search",
        theme: "bootstrap",
        ajax: {
            url: options.url,
            delay: 100,
            data: function (params) {
                var page  = params.page || 1,  // page is the one-based page number tracked by Select2
                    query = {
                        limit: 10, // page size
                        offset: (page-1)*10
                    };
                query[options.queryVarName] = params.term;

                return query;
            },
            processResults: function (data, page) {
                var results = [],
                    more = (page * 10) < data.meta.total; // whether or not there are more results available

                kQuery.each(data.data, function(i, item) {
                    // Change format to what select2 expects
                    item.id   = item.attributes[options.value];
                    item.text = item.attributes[options.text];

                    results.push(item);
                });

                // notice we return the value of more so Select2 knows if more results can be loaded
                return {results: results, more: more};
            }
        }
    };

    return kQuery.extend( {}, defaults, options);
};