import pytest


# tempdir is a built-in fixture. This temp directory gets created and deleted for the function

@pytest.fixture()
def make_a_file(tmpdir):
  file_path = str(tmpdir) + '/' + 'what.txt'
  with open(file_path, 'w') as f:
    f.write('strawberries!')


@pytest.fixture()
def int_list():
  return [9, 3, 5]


@pytest.fixture(scope='session')
def color_list():
  return ['green', 'yellow', 'red']

 
