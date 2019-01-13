## Commands
pytest  # Run all i.e. all files starting with "test_" and all functions starting with "test_"

pytest --collect-only  # See what will be picked up

pytest -k "int"  # Only pick up test functions that contain "int"

pytest -m yumyum  # Only pick up test functions tagged with @pytest.mark.yumyum

pytest test_fixtures.py --setup-show  # To see the details of the fixtures used (setup and teardown)


## Exception Testing
To see if an exception is raised correctly, have the code inside "with pytest.raises(TypeError):". If it raises TypeError, success. If not, fail :)


## Built-in Tags
- @pytest.mark.skip()  # Skipped for test
- @pytest.mark.xfail()  # Excepcted to fail. If fails, marked with "xfail". If pass, "XPASS"

Can add a condition in the (), for skipping, failing. For example, if the package's version is less than x, skip, or expected to fail. Otherwise, run as if no tag exists.


## Fixtures
- When a fixture is specified for a test, the fixture is run before the test begins :)
- Default scope is function. Can set to session if multiple tests use it (alive through all tests in a run).

- File named conftest.py will be shared by all test files WITHOUT being imported. Write fixtures here.
- Add the decorator, @pytest.fixture(). Then, any test func can use the fixture by adding the name of the fixture func as the parameter.
- Fixtures are great for storing data for tests. Have a fixture func return a variable of data. Then, access it by using the fixture func name (needs to be in the parameter too)


