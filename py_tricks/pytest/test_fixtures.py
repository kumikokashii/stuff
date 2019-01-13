import pytest


# When using fixtures, add as parameters

def test_read_file(make_a_file, tmpdir):
  file_path = str(tmpdir) + '/' + 'what.txt'
  with open(file_path, 'r') as f:
    file_content = f.read()
  assert file_content == 'strawberries!'


def test_read_int_list(int_list):
  assert int_list[0] == 9
  assert int_list[1] == 3
  assert int_list[2] == 6


def test_session_scope_func1(color_list):
  assert color_list[0] == 'green'


def test_session_scope_func2(color_list):
  assert color_list[1] == 'yellow'


