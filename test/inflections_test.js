// Generated by CoffeeScript 1.6.3
(function() {
  var camelToUnderscore, defaultUncountables, irregularities, root, singularToPlural, _;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  _ = root._ || require('underscore');

  if (typeof exports !== "undefined") {
    _.mixin(require('../src/underscore.inflections'));
  }

  defaultUncountables = ['equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'jeans', 'moose', 'deer', 'news'];

  singularToPlural = {
    "search": "searches",
    "switch": "switches",
    "fix": "fixes",
    "box": "boxes",
    "process": "processes",
    "address": "addresses",
    "case": "cases",
    "stack": "stacks",
    "wish": "wishes",
    "fish": "fish",
    "jeans": "jeans",
    "funky jeans": "funky jeans",
    "my money": "my money",
    "category": "categories",
    "query": "queries",
    "ability": "abilities",
    "agency": "agencies",
    "movie": "movies",
    "archive": "archives",
    "index": "indices",
    "wife": "wives",
    "safe": "saves",
    "half": "halves",
    "move": "moves",
    "salesperson": "salespeople",
    "person": "people",
    "spokesman": "spokesmen",
    "man": "men",
    "woman": "women",
    "basis": "bases",
    "diagnosis": "diagnoses",
    "diagnosis_a": "diagnosis_as",
    "datum": "data",
    "medium": "media",
    "stadium": "stadia",
    "analysis": "analyses",
    "node_child": "node_children",
    "child": "children",
    "experience": "experiences",
    "day": "days",
    "comment": "comments",
    "foobar": "foobars",
    "newsletter": "newsletters",
    "old_news": "old_news",
    "news": "news",
    "series": "series",
    "species": "species",
    "quiz": "quizzes",
    "perspective": "perspectives",
    "ox": "oxen",
    "photo": "photos",
    "buffalo": "buffaloes",
    "tomato": "tomatoes",
    "dwarf": "dwarves",
    "elf": "elves",
    "information": "information",
    "equipment": "equipment",
    "bus": "buses",
    "status": "statuses",
    "status_code": "status_codes",
    "mouse": "mice",
    "louse": "lice",
    "house": "houses",
    "octopus": "octopi",
    "virus": "viri",
    "alias": "aliases",
    "portfolio": "portfolios",
    "vertex": "vertices",
    "matrix": "matrices",
    "matrix_fu": "matrix_fus",
    "axis": "axes",
    "taxi": "taxis",
    "testis": "testes",
    "crisis": "crises",
    "rice": "rice",
    "shoe": "shoes",
    "horse": "horses",
    "prize": "prizes",
    "edge": "edges",
    "cow": "kine",
    "database": "databases"
  };

  camelToUnderscore = {
    "Product": "product",
    "SpecialGuest": "special_guest",
    "ApplicationController": "application_controller",
    "Area51Controller": "area51_controller"
  };

  irregularities = {
    'person': 'people',
    'man': 'men',
    'child': 'children',
    'sex': 'sexes',
    'move': 'moves',
    'misc.': 'misc.'
  };

  describe('underscore.inflections', function() {
    describe('singularize', function() {
      _.each(singularToPlural, function(value, key, list) {
        return it("should properly singularize " + value, function() {
          return _.singularize(value).should.equal(key);
        });
      });
      _.each(singularToPlural, function(value, key, list) {
        return it("should properly singularize " + key, function() {
          return _.singularize(key).should.equal(key);
        });
      });
      return it("should inflect an empty string", function() {
        return _.pluralize("").should.equal("");
      });
    });
    describe('pluralize', function() {
      _.each(singularToPlural, function(value, key, list) {
        return it("should properly pluralize " + key, function() {
          return _.pluralize(key).should.equal(value);
        });
      });
      _.each(singularToPlural, function(value, key, list) {
        return it("should properly pluralize " + value, function() {
          return _.pluralize(value).should.equal(value);
        });
      });
      it("should inflect an empty string", function() {
        return _.pluralize("").should.equal("");
      });
      it("should inflect with a count", function() {
        _.pluralize("count", 1).should.equal("1 count");
        _.pluralize("count", 2).should.equal("2 counts");
        _.pluralize("count", '1').should.equal("1 count");
        _.pluralize("count", '2').should.equal("2 counts");
        _.pluralize("count", '1,066').should.equal("1,066 counts");
        _.pluralize("count", '1.25').should.equal("1.25 counts");
        _.pluralize("count", '1.0').should.equal("1.0 count");
        _.pluralize("count", '1.00').should.equal("1.00 count");
        _.pluralize("count", 0, {
          plural: "counters"
        }).should.equal("0 counters");
        _.pluralize("count", null, {
          plural: "counters"
        }).should.equal("0 counters");
        _.pluralize("person", 2).should.equal("2 people");
        _.pluralize("buffalo", 10).should.equal("10 buffaloes");
        _.pluralize("berry", 1).should.equal("1 berry");
        return _.pluralize("berry", 12).should.equal("12 berries");
      });
      return it("should inflect with count, but not show number", function() {
        _.pluralize("count", 1, {
          showNumber: false
        }).should.equal("count");
        _.pluralize("count", 2, {
          showNumber: false
        }).should.equal("counts");
        _.pluralize("count", '1', {
          showNumber: false
        }).should.equal("count");
        _.pluralize("count", '2', {
          showNumber: false
        }).should.equal("counts");
        _.pluralize("count", '1,066', {
          showNumber: false
        }).should.equal("counts");
        _.pluralize("count", '1.25', {
          showNumber: false
        }).should.equal("counts");
        _.pluralize("count", '1.0', {
          showNumber: false
        }).should.equal("count");
        _.pluralize("count", '1.00', {
          showNumber: false
        }).should.equal("count");
        _.pluralize("count", 0, {
          plural: "counters",
          showNumber: false
        }).should.equal("counters");
        _.pluralize("count", null, {
          plural: "counters",
          showNumber: false
        }).should.equal("counters");
        _.pluralize("person", 2, {
          showNumber: false
        }).should.equal("people");
        _.pluralize("buffalo", 10, {
          showNumber: false
        }).should.equal("buffaloes");
        _.pluralize("berry", 1, {
          showNumber: false
        }).should.equal("berry");
        return _.pluralize("berry", 12, {
          showNumber: false
        }).should.equal("berries");
      });
    });
    describe('uncountable', function() {
      return _.each(defaultUncountables, function(word) {
        it("should test uncountability of " + word + " with pluralize", function() {
          return _.pluralize(word).should.equal(word);
        });
        it("should test uncountability of " + word + " with pluralize", function() {
          return _.singularize(word).should.equal(word);
        });
        return it("should test uncountability of " + word + " with pluralize", function() {
          return _.singularize(word).should.equal(_.pluralize(word));
        });
      });
    });
    describe('irregulars', function() {
      return _.each(irregularities, function(value, key) {
        it("should test irregularity between " + key + " and " + value, function() {
          _.irregular(key, value);
          _.singularize(value).should.equal(key);
          return _.pluralize(key).should.equal(value);
        });
        return it("should test pluralize of irregularity " + value + " should be the same", function() {
          _.irregular(key, value);
          return _.pluralize(value).should.equal(value);
        });
      });
    });
    describe('overwriting', function() {
      return it("should override and switch back", function() {
        _.singularize("series").should.equal("series");
        _.singular("series", "serie");
        _.singularize("series").should.equal("serie");
        return _.uncountable("series");
      });
    });
    describe('clear', function() {
      return it("should test clearing rules");
    });
    return describe('camelize', function() {
      it("should propertly camelize", function() {
        return _.each(camelToUnderscore, function(value, key, list) {
          return _.camelize(value).should.equal(key);
        });
      });
      it("should downcase the first character if passed false as a second argument", function() {
        return _.camelize('Capital', false).should.equal('capital');
      });
      return it("should remove underscores", function() {
        return _.camelize('Camel_Case').should.equal('CamelCase');
      });
    });
  });

}).call(this);
