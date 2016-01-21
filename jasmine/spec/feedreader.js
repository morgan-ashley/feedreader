$(function() {
    describe('RSS Feeds', function() {
        
        /* Tests that allFeed variable is defined, and it is not an empty array */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object. It checks to see if a URL is defined, and it is not empty */
        it('feed has url defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Loops through each feed in the allFeeds object. It checks to see if a name is defined, and it is not empty */
        it('feed has a name', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            });
        });
    }); 

    /* Declaring a new test suite named, "The menu" */
    describe('The menu', function() {

        /* Tests that the menu element is hidden by default */
        it('menu element is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Tests that menu changes visibility when menu icon is clicked */
        it('menu shows and hides when menu-icon-link is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Declaring a new test suite named, "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, done);
        });
        /* Testing that there is a .entry within the .feed container */
        it('at least one .entry element in the .feed container after loadFeed() is complete', function() {
            var container = $('.feed .entry');
            expect(container.length).toBeGreaterThan(0);
        });   
    });

    /* Declaring a new test suite named, "New Feed Selection" */
    describe('New Feed Selection', function() {
    
        /* load a different feed before test */
        var currentArticle = $('.header-title').html();
        beforeEach(function(done){
            loadFeed(1, done); 
        });

        /* returns loadFeed to original after test */
        afterAll(function(done){
            loadFeed(0, done); 
        });
        
         /* Test to see content changes after loadFeed is loaded*/
        it('loads new feed when content changes', function() {
            /* testing header title to visibly see articles headers change */
            expect($('.header-title').html()).not.toBe(currentArticle); 
        });
    });
}());