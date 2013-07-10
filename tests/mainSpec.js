describe('kslite', function() {
    describe('���ߺ���', function() {
        describe('log', function() {
            it('��������ͳ�', function() {
                KSLITE.log(123);
                expect(1).toBe(1);
            });
        });

        describe('iF', function() {
            it('�����ж�����', function() {
                expect(KSLITE.iF(function() {})).toBe(true);
                expect(KSLITE.iF({})).toBe(false);
            });
        });

        describe('iA', function() {
            it('�����ж�����', function() {
                expect(KSLITE.iA([])).toBe(true);
                expect(KSLITE.iA({})).toBe(false);
            });
        });

        describe('iO', function() {
            it('�����ж�����', function() {
                expect(KSLITE.iO({})).toBe(true);
                expect(KSLITE.iO([])).toBe(false);
                expect(KSLITE.iO(123)).toBe(false);
                expect(KSLITE.iO("123")).toBe(false);
            });
        });

        describe('iPO', function() {
            it('�����ж�����', function() {
                expect(KSLITE.iPO({})).toBe(true);
                expect(KSLITE.iPO(window)).toBe(false);
                expect(KSLITE.iPO(document.getElementsByTagName('body')[0])).toBe(false);
                expect(KSLITE.iPO([])).toBe(false);
                expect(KSLITE.iPO(123)).toBe(false);
                expect(KSLITE.iPO("123")).toBe(false);
            });
        });

        describe('iS', function() {
            it('�����ж�����', function() {
                expect(KSLITE.iS({})).toBe(false);
                expect(KSLITE.iS(window)).toBe(false);
                expect(KSLITE.iS(document.getElementsByTagName('body')[0])).toBe(false);
                expect(KSLITE.iS([])).toBe(false);
                expect(KSLITE.iS(123)).toBe(false);
                expect(KSLITE.iS("123")).toBe(true);
            });
        });


        describe('clone', function() {
            it('�����ж�����', function() {
                var a = {
                    a: 1,
                    b: 2
                }, b = {
                        a: 1,
                        b: 2,
                        c: {
                            d: 1
                        }
                    };
                expect(KSLITE.clone(a)).toEqual(a);
                expect(KSLITE.clone(a)).not.toEqual(b);
                expect(KSLITE.clone(b)).toEqual(b);
            });
        });

        describe('mix', function() {
            it('�����ж�����', function() {
                var foo = {
                    a: 1,
                    b: 2
                };

                var foo1 = {
                    a: 5,
                    b: 6
                };

                var bar = {
                    c: 4,
                    d: {
                        e: 1
                    }
                };

                expect(KSLITE.mix(foo, bar)).toEqual(foo);
                expect(KSLITE.mix(foo, bar).c).toBe(4);
                expect(KSLITE.mix(foo, foo1, false).a).toBe(1);
                expect(KSLITE.mix(foo, foo1, true).a).toBe(5);
                expect(KSLITE.mix(foo1, bar, true, ['d']).c).toBeUndefined();
                expect(foo1.d).not.toBeUndefined();
            });
        });

        describe('substitute', function() {
            it('�����ж�����', function() {
                var tmpl = "iam {a}, heis{b}";
                var tmpl1 = "iam {{a}}, heis{{b}}";
                var data = {
                    a: 123,
                    b: 234
                };

                expect(KSLITE.substitute(tmpl, data)).toEqual("iam 123, heis234");
                expect(KSLITE.substitute(tmpl1, data, /\{\{([^}])\}\}/g)).toEqual("iam 123, heis234");
            });
        });






    });
});